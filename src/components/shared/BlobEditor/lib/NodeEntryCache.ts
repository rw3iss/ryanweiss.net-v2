import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from 'components/shared/BlobEditor/ContentEntries';
import { nerUtils } from './nerUtils';
import { getLogger } from 'lib/utils/logging.js';

const { log, error } = getLogger('NodeEntryCache', { color: 'yellow', enabled: true });

export type NodeEntryRef = {
    node: Node | undefined;
    entry: ContentEntry | undefined;
    children: Array<NodeEntryRef> | undefined;
    parent: NodeEntryRef | undefined;
}

function NER(node, entry, children, parent) {
    return { node, entry, children, parent };
}

export class NodeEntryCache {
    public entries: Array<ContentEntry> | undefined;
    public rootNER: NodeEntryRef | undefined;
    private lastNER: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Creates elements from the given list of entries, and insert them into the node tree.
    public hydrateContent(entries: Array<ContentEntry>, node: Node) {
        this.entries = entries || [];

        // create a root node to start
        this.rootNER = {
            node,
            entry: undefined,  // root has no entry
            parent: undefined, // root has no parent
            children: []
        };

        this.entries.forEach(e => this.createNodeFromEntry(e, this.rootNER));

        //this.createNodeEntry(this.rootNER.entry, null)
        log(`hydrated.`, entries, this.rootNER);
    }

    // Create a node and add it to the given parent. If no parent is given, the node as added directly to the root.
    public createNodeFromEntry(entry: ContentEntry, parent?: NodeEntryRef) {
        if (!this.rootNER) throw "rootNER has not been created. Create a root node or call hydrateContent first.";
        if (!parent) parent = this.rootNER; // default to rootNER

        let ner: NodeEntryRef = NER(undefined, entry, [], parent);
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
        }

        if (!ner.node) throw "Node->entry node could not be created from type: " + entry.type;

        // add new NER to parent NER
        if (parent.node) parent.node.appendChild(ner.node);
        // if (parent.entry && ner.entry && Array.isArray(parent.entry.children)) {
        //     console.log(`add entry to parent:`, parent.entry.children, parent)
        //     parent.entry.children.push(ner.entry);
        // }
        if (parent.children) parent.children.push(ner);
        //if (parent == this.rootNER) this.entries?.push(entry); // add the entry to the root since it didn't exist.

        //console.log(`createNodeEntry result:`, entry, ner)
        return ner;
    }

    // Locate an NER in the tree by a dom node reference.
    public findNode(node: Node, parent?): NodeEntryRef | undefined {
        return nerUtils.findNode(node, parent, this);
    }

    // Locates and updates the NER for the node, of it exists, or inserts a new one.
    public updateOrInsert(node: Node, entry: ContentEntry): NodeEntryRef {
        if (!node.parentNode) throw "parentNode does not exist."

        // if the node is the root... it should... always insert?
        const isRoot = node == this.rootNER?.node;

        log(`finding parent. root?`, isRoot, 'parent node:', node.parentNode)
        let parent = isRoot ? this.rootNER : this.findNode(node.parentNode as Node);
        let ner = isRoot ? this.rootNER : this.findNode(node, parent);
        log(`found child in parent?`, parent, 'child:', ner);
        if (ner) nerUtils.updateNode(ner, entry, this);
        else if (parent) ner = nerUtils.insertNode(parent, node, entry, this);
        else throw "Parent not found for updateOrInsert."

        this.lastNER = ner;
        return ner;
    }

    // Finds the node in the tree and removes the entry from it, and the dom node as well.
    public deleteNode(node) {
        return nerUtils.deleteNode(node, this);
    }

    // Called when a change is detected on the node. Finds the given node in the tree and updates it's entry.
    // If the node does not exist the NER is inserted in its relative dom position.
    public applyChange(node: Node, entry: ContentEntry) {
        //log(`applyChange`, 'isRoot?', node == this.rootNER?.node, 'node:', node, 'entry:', entry)
        try {
            // todo: move this to WEditor?
            // if its a text entry, check the parent... if it only has a break, remove the break.
            //console.log(`converted:`, entry);
            return this.lastNER = this.updateOrInsert(node, entry);
        } catch (e) {
            log(`Exception in applyChange():`, e);
        }
    }

    public clear = () => {
        nerUtils.clearCache(this);
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
            children: [],
            parent
        };
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                ner.node.setAttribute(key, value);
            }
        }
        if (Array.isArray(entry.children)) {
            entry.children.forEach(child => nodeCache.createNodeFromEntry(child, ner));
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
            if (childEntry) children.push(childEntry);
        });
        log(`GroupEntry`, node, children);
        return new GroupEntry(attributes, children);
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
        this.attributes = attributes || {};
    }

    static createNodeEntry(entry: TextEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        //console.log(`TextNode.createNodeEntry(), entry:`, entry, 'parent:', parent)
        const ner = {
            entry,
            node: document.createTextNode(entry.children),
            children: [],
            parent
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
        // todo: add new type
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
            children: [],
            parent
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
