interface BaseEntry {
    type: string;
    attributes?: { [key: string]: string };
    inner?: string | ContentEntry[] | null;
}

export type NodeEntryRef = {
    node: Node;
    entry: ContentEntry;
    children?: Array<NodeEntryRef>;
}

export abstract class ContentEntry {
    abstract type: string;
    abstract attributes?: { [key: string]: string };
    abstract inner?: string | ContentEntry[];

    static convertToHTML(entry: ContentEntry, parent: HTMLElement): void {
        throw new Error('Method not implemented');
    }

    static convertNodeToEntry(node: Node): ContentEntry | null {
        throw new Error('Method not implemented');
    }
}

export class TextEntry extends ContentEntry {
    type = 'text';
    attributes?: { [key: string]: string };
    inner: string;

    constructor(inner: string, attributes?: { [key: string]: string }) {
        super();
        this.inner = inner;
        this.attributes = attributes;
    }

    static convertToHTML(entry: TextEntry, parent: HTMLElement) {
        let textNode: Node;
        let wrapper: HTMLElement | null = null;

        if (entry.attributes) {
            if (entry.attributes['bold']) {
                wrapper = document.createElement('b');
            } else if (entry.attributes['italic']) {
                wrapper = document.createElement('i');
            } else if (entry.attributes['span']) {
                wrapper = document.createElement('span');
                if (entry.attributes['class']) {
                    wrapper.className = entry.attributes['class'];
                }
            }
            // Add more conditions for other text styling tags if needed
        }

        textNode = document.createTextNode(entry.inner);
        if (wrapper) {
            wrapper.appendChild(textNode);
            if (wrapper.tagName === 'SPAN') {
                Object.entries(entry.attributes || {}).forEach(([key, value]) => {
                    if (key !== 'span' && key !== 'class') {
                        wrapper.setAttribute(key, value);
                    }
                });
            }
            parent.appendChild(wrapper);
        } else {
            parent.appendChild(textNode);
        }
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

export class HeaderEntry extends ContentEntry {
    type = 'header';
    attributes?: { [key: string]: string };
    inner: string;

    constructor(inner: string, attributes?: { [key: string]: string }) {
        super();
        this.inner = inner;
        this.attributes = attributes;
    }

    static convertToHTML(entry: HeaderEntry, parent: HTMLElement) {
        const level = entry.attributes?.level || '1';
        const h = document.createElement(`h${level}`);
        h.textContent = entry.inner;
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                if (key !== 'level') {
                    h.setAttribute(key, value);
                }
            }
        }
        parent.appendChild(h);
    }

    static convertNodeToEntry(node: HTMLHeadingElement): HeaderEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });
        return new HeaderEntry(node.textContent || '', attributes);
    }
}

export class FileEntry extends ContentEntry {
    type = 'file';
    attributes?: { [key: string]: string };
    inner: string;

    constructor(inner: string, attributes?: { [key: string]: string }) {
        super();
        this.inner = inner;
        this.attributes = attributes;
    }

    static convertToHTML(entry: FileEntry, parent: HTMLElement) {
        const fileDiv = document.createElement('div');
        fileDiv.textContent = entry.inner;
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                fileDiv.setAttribute(key, value);
            }
        }
        parent.appendChild(fileDiv);
    }

    static convertNodeToEntry(node: HTMLDivElement): FileEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });
        return new FileEntry(node.textContent || '', attributes);
    }
}

export class BreakEntry extends ContentEntry {
    type = 'break';
    attributes?: { [key: string]: string };
    inner = [];
    //inner?: ContentEntry[];

    constructor(attributes?: { [key: string]: string }) {
        super();
        this.attributes = attributes;
    }

    static convertToHTML(entry: BreakEntry, parent: HTMLElement) {
        const br = document.createElement('br');
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                br.setAttribute(key, value);
            }
        }
        parent.appendChild(br);
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

export class PreEntry extends ContentEntry {
    type = 'pre';
    attributes?: { [key: string]: string };
    inner: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, inner: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
    }

    static convertToHTML(entry: PreEntry, parent: HTMLElement) {
        const pre = document.createElement('pre');
        if (entry.attributes) {
            pre.setAttribute('type', entry.type);
            for (const [key, value] of Object.entries(entry.attributes)) {
                pre.setAttribute(key, value);
            }
        }
        parent.appendChild(pre);
        entry.inner.forEach(child => ContentEntries.convertToHTMLByType(child, pre));
    }

    static convertNodeToEntry(node: HTMLPreElement): PreEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        const inner: ContentEntry[] = [];
        Array.from(node.childNodes).forEach(childNode => {
            const childEntry = ContentEntries.convertNodeToEntry(childNode);
            if (childEntry) inner.push(childEntry);
        });

        return new PreEntry(attributes, inner);
    }
}

export class CodeEntry extends ContentEntry {
    type = 'code';
    attributes?: { [key: string]: string };
    inner: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, inner: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
    }

    static convertToHTML(entry: CodeEntry, parent: HTMLElement) {
        const code = document.createElement('code');
        if (entry.attributes) {
            code.setAttribute('type', entry.type);
            for (const [key, value] of Object.entries(entry.attributes)) {
                code.setAttribute(key, value);
            }
        }
        parent.appendChild(code);
        entry.inner.forEach(child => ContentEntries.convertToHTMLByType(child, code));
    }

    static convertNodeToEntry(node: HTMLElement): CodeEntry {
        if (node.tagName !== 'CODE') return null;

        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        const inner: ContentEntry[] = [];
        Array.from(node.childNodes).forEach(childNode => {
            const childEntry = ContentEntries.convertNodeToEntry(childNode);
            if (childEntry) inner.push(childEntry);
        });

        return new CodeEntry(attributes, inner);
    }
}

export class GroupEntry extends ContentEntry {
    type = 'group';
    attributes?: { [key: string]: string };
    inner: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, inner: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
    }

    static convertToHTML(entry: GroupEntry, parent: HTMLElement) {
        const div = document.createElement('div');
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                div.setAttribute(key, value);
            }
        }
        parent.appendChild(div);
        if (Array.isArray(entry.inner)) {
            entry.inner.forEach(child => ContentEntries.convertToHTMLByType(child, div));
        } else if (entry.inner) {
            // ContentEntries.convertToHTMLByType(entry.ild, div)
            div.innerText = entry.inner;
        }
    }

    static convertNodeToEntry(node: HTMLElement): GroupEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        const inner: ContentEntry[] = [];
        Array.from(node.childNodes).forEach(childNode => {
            const childEntry = ContentEntries.convertNodeToEntry(childNode);
            if (childEntry) inner.push(childEntry);
        });

        return new GroupEntry(attributes, inner);
    }
}

export class LinkEntry extends ContentEntry {
    type = 'link';
    attributes?: { [key: string]: string };
    inner: string | ContentEntry[];

    constructor(inner: string | ContentEntry[], attributes?: { [key: string]: string }) {
        super();
        this.inner = inner;
        this.attributes = attributes;
    }

    static convertToHTML(entry: LinkEntry, parent: HTMLElement) {
        const a = document.createElement('a');
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                a.setAttribute(key, value);
            }
        }
        parent.appendChild(a);

        if (Array.isArray(entry.inner)) {
            entry.inner.forEach(child => ContentEntries.convertToHTMLByType(child, a));
        } else {
            a.textContent = entry.inner;
        }
    }

    static convertNodeToEntry(node: HTMLAnchorElement): LinkEntry {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        let inner: string | ContentEntry[];
        if (node.childNodes.length > 0) {
            if (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE) {
                inner = node.textContent || '';
            } else {
                inner = Array.from(node.childNodes).map(childNode => ContentEntries.convertNodeToEntry(childNode)).filter(Boolean) as ContentEntry[];
            }
        } else {
            inner = '';
        }

        return new LinkEntry(inner, attributes);
    }
}

export class CustomEntry extends ContentEntry {
    type = 'custom';
    attributes?: { [key: string]: string };
    inner: ContentEntry[];

    constructor(attributes?: { [key: string]: string }, inner: ContentEntry[] = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
    }

    static convertToHTML(entry: CustomEntry, parent: HTMLElement) {
        const customDiv = document.createElement('div');
        customDiv.setAttribute('custom', 'true');
        if (entry.attributes) {
            for (const [key, value] of Object.entries(entry.attributes)) {
                customDiv.setAttribute(key, value);
            }
        }
        parent.appendChild(customDiv);
        entry.inner.forEach(child => ContentEntries.convertToHTMLByType(child, customDiv));
    }

    static convertNodeToEntry(node: HTMLDivElement): CustomEntry | null {
        if (node.getAttribute('custom') !== 'true') return null;

        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
        }, {} as { [key: string]: string });

        const inner: ContentEntry[] = [];
        Array.from(node.childNodes).forEach(childNode => {
            const childEntry = ContentEntries.convertNodeToEntry(childNode);
            if (childEntry) inner.push(childEntry);
        });

        return new CustomEntry(attributes, inner);
    }
}


export class ContentEntries {

    static convertToHTMLByType(entry: ContentEntry, parent: HTMLElement) {
        switch (entry.type) {
            case 'text':
                TextEntry.convertToHTML(entry as TextEntry, parent);
                break;
            case 'group':
                GroupEntry.convertToHTML(entry as GroupEntry, parent);
                break;
            case 'link':
                LinkEntry.convertToHTML(entry as LinkEntry, parent);
                break;
            case 'header':
                HeaderEntry.convertToHTML(entry as HeaderEntry, parent);
                break;
            case 'file':
                FileEntry.convertToHTML(entry as FileEntry, parent);
                break;
            case 'custom':
                CustomEntry.convertToHTML(entry as CustomEntry, parent);
                break;
            case 'pre':
                PreEntry.convertToHTML(entry as PreEntry, parent);
                break;
            case 'code':
                CodeEntry.convertToHTML(entry as CodeEntry, parent);
                break;
            case 'break':
                BreakEntry.convertToHTML(entry as BreakEntry, parent);
                break;
            default:
                console.warn('Unknown entry type:', entry.type);
        }
    }

    static convertNodeToEntry(node: Node): ContentEntry | undefined {
        let entry;

        if (node.nodeType === Node.TEXT_NODE) {
            entry = TextEntry.convertNodeToEntry(node);
        }
        else if (node.nodeName === 'DIV') {
            const div = node as HTMLDivElement;
            if (div.getAttribute('custom') === 'true') {
                entry = CustomEntry.convertNodeToEntry(div);
            } else {
                entry = GroupEntry.convertNodeToEntry(div);
            }
        }
        else if (node.nodeName === 'A') {
            entry = LinkEntry.convertNodeToEntry(node as HTMLAnchorElement);
        }
        else if (/^H[1-6]$/.test(node.nodeName)) {
            entry = HeaderEntry.convertNodeToEntry(node as HTMLHeadingElement);
        }
        else if (node.nodeName === 'B' || node.nodeName === 'I' || node.nodeName === 'SPAN') {
            entry = TextEntry.convertNodeToEntry(node as HTMLElement);
        }
        else if (node.nodeName === 'PRE') {
            entry = PreEntry.convertNodeToEntry(node as HTMLPreElement);
        }
        else if (node.nodeName === 'CODE') {
            entry = CodeEntry.convertNodeToEntry(node as HTMLElement);
        }
        else if (node.nodeName === 'BR') {
            entry = BreakEntry.convertNodeToEntry(node as HTMLElement);
        }

        if (!entry) throw "Could not convert node type to entry: " + node.nodeType;

        return entry;
    }
}