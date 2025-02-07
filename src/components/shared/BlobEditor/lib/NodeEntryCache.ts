import { BreakEntry, ContentEntry, GroupEntry, TextEntry } from 'components/shared/BlobEditor/ContentEntries';

export type NodeEntryRef = {
    node: Node;
    entry: ContentEntry | undefined;
    children: Array<NodeEntryRef>;
}

/**
 * @description Maintains two dictionary trees, one with a reference of existing dom nodes to entries, and the other of just the entries.
 * When an update from a dom node is received, the reference is found and replaced in place, allowing the entry tree to be retrieved and serialized
 * without any further work.
 * @export
 * @class NodeEntryCache
 */
export class NodeEntryCache {
    private rootNode: NodeEntryRef | undefined;

    // node tree that references each entry, allowing for quick lookup of relevant nodes->entries.
    //public nodeTree: Array<NodeEntryRef> = [];

    // the actual entry tree (content)
    //public entryTree: Array<ContentEntry> = [];

    private lastNodeEntry: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Given a root node with children, create a dom node for it, and add to the node cache, then do the same for all children.
    // Populates contentEditable dom, and fills node + entry trees.
    public hydrateContent(entries: Array<ContentEntry>, node: Node) {
        // create a root node and add to node cache tree
        this.rootNode = {
            node,
            children: [],
            entry: undefined
        };

        // add root reference to tree, mostly for backwards dom node lookup stop
        //this.nodeTree.push(root);

        //nodeCache.createNodeEntry(null, root);
        // process each immediate entry (and subsequent children), and append to the root.
        entries.forEach(entry => this.createNodeEntry(entry, this.rootNode));
        console.log(`hydrated.`, this.rootNode);
    }


    // create a node and add it to the parent. If no parent is given, the node as added directly to the tree.
    public createNodeEntry(entry: ContentEntry, parent: NodeEntryRef) {
        let ner;

        if (entry) {
            switch (entry.type) {
                case 'text':
                    ner = TextNode.createNodeEntry(entry as TextEntry, parent, this);
                    break;
                case 'group':
                    ner = GroupNode.createNodeEntry(entry as GroupEntry, parent, this);
                    break;
                case 'break':
                    ner = BreakNode.createNodeEntry(entry as BreakEntry, parent, this);
                    break;
                default:
                    break;
            }
        } else {
            // no entry given, ie. for root node
            ner = { node: undefined, entry, children: [] };
        }

        if (!ner) throw "Node->entry node could not be created from type: " + entry.type;

        if (parent) {
            if (parent.node) parent.node.appendChild(ner.node);
            if (parent.children) parent.children.push(ner);
        } else {
            this.nodeTree.push(ner);
        }

        return ner;
    }

    // Called when a change is detected on the node. Find the given node in the tree and updates it's entry.
    public applyChange(node: Node) {
        console.log(`applyChange`, node);
        const ner = this.findNodeEntry(node);
        let entry = ContentEntries.convertNodeToEntry(node);
        if (!entry) throw "Entry could not be created from node.";
    }

    // tries to locate an NER by looking for it's node in the nodeTree walking backwards.
    public findNodeEntry(node: Node) {
        if (!this.rootNode) throw "No rootNode found on NodeEntryCache. Did you forget to call hydrateContent()?";

        // if the last applied node is the same, return immediately with it.
        if (this.lastNodeEntry?.node == node) {
            console.log(`last node match.`, node);
            return this.lastNodeEntry;
        }

        // Crawl up to root from the node, keeping a stack of parents, and then
        // DFS back through the NER tree using them to find the NER for the node.
        let currNode: any = node;
        let lookupPath: any = [];
        while (currNode != this.rootNode.node) {
            lookupPath.push(currNode); // push all but root
            console.log(`currNode:`, currNode);
            currNode = currNode.parentNode;
        }
        console.log(`root found?`, currNode);

        if (currNode != this.rootNode.node) throw "Expected currNode to be the rootNode, but it's not.";

        // walk down from the NER tree root, matching each node element in the
        // lookup path along the way, stopping at the NER that matches the last node.
        console.log(`walking back...`)
        currNode = lookupPath.pop();
        let currNer = this.rootNode;
        while (currNode) {
            // look for target node in the children, or otherwise next branch node in the lookup path
            for (const c of currNer.children) {
                // finish if child matches target node
                if (c.node == node) {
                    console.log(`NODE FOUND`);
                    return c;
                }

                // check if the child matches the lookup path node, and continue there
                console.log(`c`, c);
                if (c.node == currNode) {
                    // we've found the next node, continue at this NER and look for next
                    currNer = c;
                    currNode = lookupPath.pop();
                }
            };
        }
    }

    // Return just the entries without the node references, so they can be saved as Blob content.
    public getEntries = () => this.entryTree; //odeEntryRefs.map(ner => ner.entry);

    // Find a NodeEntryRef whose node matches the given node.
    // TODO: find from parent stack...
    public findEntry = (node: Node): NodeEntryRef | undefined => this.nodeEntryRefs.find(n => n.node == node);

    // Change the given node's entry content and set last edited node.
    public update = (ner: NodeEntryRef, entry: ContentEntry) => {
        ner.entry = entry;
        this.lastNodeEntry = ner;
        console.log(`update`, ner)
    }

    // Append an entry to the list of cached nodes, and set last edited node.
    public add = (node, entry) => {
        const ner = { node, entry, children: [] };
        this.nodeEntryRefs.push(ner);
        this.lastNodeEntry = ner;
        console.log(`add`, ner)
    }

    // Updates the given node with the new entry. Compares lastNodeEntry with current node to avoid lookup through all nodes.
    public updateOrAdd = (node: Node, entry: ContentEntry) => {
        let ner;
        if (this.lastNodeEntry && this.lastNodeEntry.node == node) ner = this.lastNodeEntry;
        if (ner) this.update(ner, entry);
        else this.add(node, entry);
    }


}

export class GroupNode extends ContentEntry {
    type = 'group';
    attributes?: { [key: string]: string };
    children: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, children: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.children = children;
    }

    static createNodeEntry(entry: GroupEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        const ner: NodeEntryRef = {
            entry,
            node: document.createElement('div'),
            children: []
        };
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                ner.node.setAttribute(key, value);
            }
        }
        if (Array.isArray(entry.children)) {
            entry.children.forEach(child => nodeCache.createNodeEntry(child, ner));
        } else if (entry.children) {
            // ContentEntries.convertToHTMLByType(entry.ild, div)
            ner.node.innerText = entry.children;
        }
        return ner;
    }

    static convertNodeToEntry(node: HTMLElement): GroupEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        const children: ContentEntry[] = [];
        Array.from(node.childNodes).forEach(childNode => {
            const childEntry = ContentEntries.convertNodeToEntry(childNode);
            if (childEntry) inner.push(childEntry);
        });

        return new GroupEntry(attributes, inner);
    }
}

export class TextNode extends ContentEntry {
    type = 'text';
    attributes?: { [key: string]: string };
    children: string;

    constructor(children: string, attributes?: { [key: string]: string }) {
        super();
        if (typeof children != 'string') throw "Error: TextEntry expects children to be a string.";
        this.children = children;
        this.attributes = attributes;
    }

    static createNodeEntry(entry: TextEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        const ner = {
            entry,
            node: document.createTextNode(entry.children),
            children: []
        };

        if (entry.attributes) {
            if (entry.attributes['bold']) {
                ner.node.classList.add('bold');
            }
            if (entry.attributes['italic']) {
                ner.node.classList.add('italic');
            }
        }

        return ner;
    }

    static convertNodeToEntry(node: Node): TextEntry | null {
        if (node.nodeType === Node.TEXT_NODE) {
            return new TextEntry(node.textContent || '');
        } else if (node instanceof HTMLElement) {
            let attributes: { [key: string]: string } = {};
            let textContent = '';

            if (node.tagName === 'B') {
                attributes['bold'] = 'true';
                textContent = node.textContent || '';
            } else if (node.tagName === 'I') {
                attributes['italic'] = 'true';
                textContent = node.textContent || '';
            } else if (node.tagName === 'SPAN') {
                attributes['span'] = 'true';
                textContent = node.textContent || '';
                Array.from(node.attributes).forEach(attr => {
                    attributes[attr.name] = attr.value;
                });
            } else {
                return null;
            }

            return new TextEntry(textContent, attributes);
        }
        return null;
    }
}


export class BreakNode extends ContentEntry {
    type = 'break';
    attributes?: { [key: string]: string };
    children = [];
    //children?: ContentEntry[];

    constructor(attributes?: { [key: string]: string }) {
        super();
        this.attributes = attributes;
    }

    static createNodeEntry(entry: BreakEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        const ner = {
            entry,
            node: document.createElement('br'),
            children: []
        };
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                ner.node.setAttribute(key, value);
            }
        }
        return ner;
    }

    static convertNodeToEntry(node: HTMLElement): BreakEntry | null {
        if (node.tagName === 'BR') {
            const attributes = Array.from(node.attributes).reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as { [key: string]: string });
            return new BreakEntry(attributes);
        }
        return null;
    }
}
