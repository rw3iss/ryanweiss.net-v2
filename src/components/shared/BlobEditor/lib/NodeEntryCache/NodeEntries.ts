import { getLogger } from "lib/utils/logging";
import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from "./ContentEntries.js";
import { NodeEntryCache } from "./NodeEntryCache.js";

const { log, warn } = getLogger('NodeEntries', { color: 'yellow', enabled: true });

export type NodeEntryRef = {
    node: Node;
    entry: ContentEntry | undefined;
    children: Array<NodeEntryRef>;
    parent: NodeEntryRef | undefined;
}

export const NER = (node, entry, children, parent) => ({ node, entry, children, parent });

export class GroupNode extends ContentEntry {
    type = 'group';
    attributes?: { [key: string]: string };
    children: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, children: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.children = children;
    }

    static createNERFromEntry(entry: GroupEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
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
            //console.log(`group children:`, entry.children)
            entry.children.forEach(child => nodeCache.createNERFromEntry(child, ner));
        } else {
            throw "Expected array for GroupNode.children but received: " + typeof entry.children;
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

    static createNERFromEntry(entry: TextEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        //console.log(`TextNode.createNodeEntry(), entry:`, entry, 'parent:', parent)
        const ner = NER(document.createTextNode(entry.children), entry, [], parent);

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

    static createNERFromEntry(entry: BreakEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
        const ner = NER(document.createElement('br'), entry, [], parent);
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
