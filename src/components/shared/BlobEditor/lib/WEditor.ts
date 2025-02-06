import { NodeEntryCache } from 'components/shared/BlobEditor/lib/NodeEntryCache';
import { Blob, BlobContent } from 'types/Blob';
import { ContentEntries } from '../ContentEntries';
import { IPlugin } from '../plugins/IPlugin';


const CHANGE_TIMEOUT_MS = 500; // time delay to save after last key/input
const AUTOSAVE_TIMEOUT_MS = 3000; // time delay to save automatically


export class WEditor {
    private container: HTMLElement | null;
    private contentEditable: HTMLDivElement | null;

    private onChangeHandler: (content: BlobContent) => void;
    private plugins: IPlugin[];

    private applyChangesTimeoutId: Timeout | null = null;
    private autoSaveTimeoutId: Timeout | null = null;

    private blob: Blob;
    private nodes: NodeEntryCache;

    constructor(
        container: HTMLElement | null,
        onChange: (content: BlobContent) => void,
        plugins: IPlugin[] = []) {
        this.container = container;
        this.contentEditable = null;
        this.onChangeHandler = onChange;
        this.plugins = plugins || [];
        this.nodes = new NodeEntryCache();
        this.initialize();
    }

    private initialize() {
        if (!this.container) return console.error('WEditor initialization failed: Container is null');

        if (!this.contentEditable) {
            this.contentEditable = document.createElement('div');
            this.contentEditable.setAttribute('contenteditable', 'true');
            this.contentEditable.classList.add('content-editor');
            this.container.appendChild(this.contentEditable);
        }

        // init plugins:
        this.plugins.forEach(plugin => plugin.initialize(this, this.container));

        // setup event listeners:
        this.contentEditable.addEventListener('input', this.handleContentChange);
    }

    private handleContentChange = (e) => {
        // Find the node where the edit took place
        let editNode: Node | undefined = undefined;
        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            editNode = range?.commonAncestorContainer;
        }

        // Apply the changes immediately to the entry, for throttled commit later
        this.applyChanges(editNode);
    }

    // clear content
    public clearContent(apply?) {
        if (this.contentEditable) {
            this.contentEditable.innerHTML = '';
            if (apply) this.applyChanges(this.contentEditable);
        }
    }

    public loadBlob(blob?) {
        if (blob) this.blob = blob;
        if (!this.contentEditable) return console.error('Cannot load blob: ContentEditable is null');
        if (!this.blob) return console.error("No blob given to load.");
        this.contentEditable.innerHTML = '';
        this.convertToHTML(this.blob.content, this.contentEditable);
        // todo: should hydrate node cache
    }

    private convertToHTML(content: BlobContent, parent: HTMLElement) {
        console.log(`convertToHTML`, content)
        content.entries.forEach(entry => {
            ContentEntries.convertToHTMLByType(entry, parent);
        });
    }

    // updates the given node's entry with it's changed content
    private applyChanges(node) {
        if (!node) throw "No node given to applyChanges()";

        let entry = ContentEntries.convertNodeToEntry(node);
        if (!entry) throw "Entry could not be created from node.";

        console.log(`apply`, node, node.parentNode);
        // find node in dom, or add at found index


        // update entry from node

        if (node) {
            this.nodes.updateOrAdd(node, entry);
        } else {
            console.log(`no edit node given!`);
        }

        // Signal to save all pending changes after timeout.
        // There are two timers here: One that will autosave every X secs, and which saves after the last input.
        if (this.applyChangesTimeoutId) clearTimeout(this.applyChangesTimeoutId);
        this.applyChangesTimeoutId = setTimeout(() => {
            this.commitChanges();
        }, CHANGE_TIMEOUT_MS);

        if (!this.autoSaveTimeoutId) {
            this.autoSaveTimeoutId = setTimeout(() => {
                this.commitChanges();
            }, AUTOSAVE_TIMEOUT_MS);
        }
    }

    // Converts content area HTML to JSON. Any html elements associated with custom "types" will be ignored convert to JSON through their handlers.
    public commitChanges(): BlobContent | null {
        if (!this.contentEditable) {
            console.error('Cannot apply changes: ContentEditable is null');
            return null;
        }

        // Clear the auto-save and auto-change timeouts since we're saving now
        if (this.autoSaveTimeoutId) this.autoSaveTimeoutId = clearTimeout(this.autoSaveTimeoutId);
        if (this.applyChangesTimeoutId) this.applyChangesTimeoutId = clearTimeout(this.applyChangesTimeoutId);

        const content: BlobContent = { entries: this.nodes.getEntries() };
        this.onChangeHandler(content);

        return content;
    }

}