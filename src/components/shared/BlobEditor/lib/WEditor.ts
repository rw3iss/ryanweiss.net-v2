import { ContentEntries, ContentEntry, NodeEntryRef } from '../ContentEntries';
import { Blob, BlobContent } from 'types/Blob';
import { IPlugin } from '../plugins/IPlugin';


const CHANGE_TIMEOUT_MS = 500; // time delay to save after last key/input
const AUTOSAVE_TIMEOUT_MS = 3000; // time delay to save automatically


export class WEditor {
    private container: HTMLElement | null;
    private blob: Blob;
    private contentEditable: HTMLDivElement | null;
    private onChangeHandler: (content: BlobContent) => void;
    private plugins: IPlugin[];
    private applyChangesTimeoutId: Timeout | null = null;
    private autoSaveTimeoutId: Timeout | null = null;

    private nodeEntryRefs: Array<NodeEntryRef> = [];

    // returns an entry linked to a given dom node
    private findCachedEntry = (node): NodeEntryRef | undefined => {
        return this.nodeEntryRefs.find(n => n.node == node);
    }

    constructor(container: HTMLElement | null, blob: Blob, onChange: (content: BlobContent) => void, plugins: IPlugin[] = []) {
        this.container = container;
        this.blob = blob;
        this.contentEditable = null;
        this.onChangeHandler = onChange;
        this.plugins = plugins || [];
        this.initialize();
        this.initPlugins();
    }

    private initialize() {
        if (!this.container) {
            console.error('WEditor initialization failed: Container is null');
            return;
        }

        if (!this.contentEditable) {
            this.contentEditable = document.createElement('div');
            this.contentEditable.setAttribute('contenteditable', 'true');
            this.container.appendChild(this.contentEditable);
        }

        this.loadBlob();
        this.setupEventListeners();
    }

    private initPlugins() {
        if (!this.container) return;
        this.plugins.forEach(plugin => {
            plugin.initialize(this, this.container);
        });
    }

    private setupEventListeners() {
        if (!this.contentEditable) return;

        this.contentEditable.addEventListener('input', this.handleContentChange);
        //this.contentEditable.addEventListener('keyup', this.handleContentChange);
    }

    // replaces the node's matching ContentEntry with a new one
    private applyChanges(node) {
        if (node) {
            let ner: NodeEntryRef | undefined = this.findCachedEntry(node);
            //let editContent = editNode.textContent;
            let entry = ContentEntries.convertNodeToEntry(node);
            if (!entry) throw "Entry could not be created from node.";
            console.log(`existing node?`, node, ner, entry);
            if (ner) {
                ner.entry = entry;
            } else {
                ner = { node, entry };
                this.nodeEntryRefs.push(ner);
            }
        } else {
            console.log(`no edit node!`)
        }
    }

    private handleContentChange = (e) => {
        let editNode: Node | undefined = undefined;
        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            editNode = range?.commonAncestorContainer;
        }

        this.applyChanges(editNode);

        // Clear previous timeout for the 'save after stopping' and set a new timeout
        if (this.applyChangesTimeoutId) clearTimeout(this.applyChangesTimeoutId);
        this.applyChangesTimeoutId = setTimeout(() => {
            console.log(`autochange...`)
            this.commitChanges();
        }, CHANGE_TIMEOUT_MS);

        // If not set to autosave already, start timeout
        if (!this.autoSaveTimeoutId) {
            this.autoSaveTimeoutId = setTimeout(() => {
                console.log(`autosave...`)
                this.commitChanges(); // This ensures at least one save operation every 2 seconds
            }, AUTOSAVE_TIMEOUT_MS);
        }
    }

    // clear content
    public clearContent() {
        if (this.contentEditable) {
            this.contentEditable.innerHTML = '';
            this.applyChanges();
        }
    }

    public loadBlob() {
        if (!this.contentEditable) {
            console.error('Cannot load blob: ContentEditable is null');
            return;
        }
        this.contentEditable.innerHTML = '';
        this.convertToHTML(this.blob.content, this.contentEditable);
    }

    private convertToHTML(content: BlobContent, parent: HTMLElement) {
        console.log(`convertToHTML`, content)
        content.entries.forEach(entry => {
            ContentEntries.convertToHTMLByType(entry, parent);
        });
    }

    // Converts content area HTML to JSON. Any html elements associated with custom "types" will be ignored convert to JSON through their handlers.
    public commitChanges(): BlobContent | null {
        if (!this.contentEditable) {
            console.error('Cannot apply changes: ContentEditable is null');
            return null;
        }

        // Clear the auto-save timeout since we're saving now
        if (this.autoSaveTimeoutId) {
            clearTimeout(this.autoSaveTimeoutId);
            this.autoSaveTimeoutId = null;
        }
        if (this.applyChangesTimeoutId) {
            clearTimeout(this.applyChangesTimeoutId);
            this.applyChangesTimeoutId = null;
        }

        // const entries: ContentEntry[] = [];
        // const nodes = Array.from(this.contentEditable.childNodes);

        // nodes.forEach(node => {
        //     let ner: NodeEntryRef | undefined = this.findCachedEntry(node);
        //     if (!ner) {
        //         let entry = ContentEntries.convertNodeToEntry(node);
        //         if (entry) {
        //             ner = { node, entry };
        //             console.log(`adding new entry`, ner)
        //             this.nodeEntryRefs.push(ner);
        //         }
        //     } else {
        //         console.log(`cached entry`, ner)
        //     }

        //     if (ner) {
        //         entries.push(ner.entry);
        //     }
        // });

        const content: BlobContent = { entries: this.nodeEntryRefs.map(ner => ner.entry) };
        this.onChangeHandler(content);

        return content;
    }

    public updateContent(newContent: BlobContent) {
    }
}