import { BreakEntry, ContentEntry, GroupEntry, TextEntry } from 'components/shared/BlobEditor/ContentEntries';

export type NodeEntryRef = {
    node: Node;
    entry: ContentEntry;
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
    // node tree that references each entry, allowing for quick lookup of relevant nodes->entries.
    public nodeTree: Array<NodeEntryRef> = [];

    // the actual entry tree (content)
    public entryTree: Array<ContentEntry> = [];

    private nodeEntryRefs: Array<NodeEntryRef> = [];
    private lastNodeEntry: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

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

    static createNodeEntry(entry: ContentEntry, parent: NodeEntryRef) {
        // create an NER for entry, add to parent NER
        let ner;

        switch (entry.type) {
            case 'text':
                ner = TextNode.createNodeEntry(entry as TextEntry, parent);
                break;
            case 'group':
                ner = GroupNode.createNodeEntry(entry as GroupEntry, parent);
                break;
            case 'break':
                ner = BreakNode.createNodeEntry(entry as BreakEntry, parent);
                break;
            default:
                break;
        }

        if (parent) {
            if (parent.node) parent.node.appendChild(ner.node);
            if (parent.children) parent.children.push(ner);
        }

        return ner;
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

    static createNodeEntry(entry: GroupEntry, parent: NodeEntryRef): NodeEntryRef {
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
            entry.children.forEach(child => NodeEntryCache.createNodeEntry(child, ner));
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

    static createNodeEntry(entry: TextEntry, parent: NodeEntryRef, nodeCache?: NodeEntryCache): NodeEntryRef {
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

    static createNodeEntry(entry: BreakEntry, parent: NodeEntryRef, nodeCache?: NodeEntryCache): NodeEntryRef {
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
