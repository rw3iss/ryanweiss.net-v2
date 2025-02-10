import { NodeEntryCache } from 'components/shared/BlobEditor/lib/NodeEntryCache';
import { Blob, BlobContent } from 'types/Blob';
import { IPlugin } from '../plugins/IPlugin';
import { ContentEntries } from '../ContentEntries.js';
import { nerUtils } from './nerUtils.js';

const CHANGE_TIMEOUT_MS = 500; // time delay to save after last key/input
const AUTOSAVE_TIMEOUT_MS = 3000; // time delay to save automatically

const CONTENT_ROOT_CLASS = 'w-content';

type WEditorConfig = {
    focusOnStart: boolean;
}

const DEFAULT_CONFIG = (): WEditorConfig => ({
    focusOnStart: false
})

export class WEditor {

    private contentEditable: HTMLDivElement | null;

    private applyChangesTimeoutId: Timeout | null = null;
    private autoSaveTimeoutId: Timeout | null = null;

    private blob: Blob;
    private nodeCache: NodeEntryCache;

    constructor(
        private container: HTMLElement,
        private onChangeHandler: (content: BlobContent) => void,
        private plugins: IPlugin[] = [],
        private config: WEditorConfig = DEFAULT_CONFIG()
    ) {
        this.nodeCache = new NodeEntryCache();
        this.initialize();
    }

    private initialize() {
        if (!this.container) return console.error('WEditor initialization failed: Container is null');

        if (!this.contentEditable) {
            this.contentEditable = document.createElement('div');
            this.contentEditable.setAttribute('contenteditable', 'true');
            this.contentEditable.classList.add(CONTENT_ROOT_CLASS);
            this.container.appendChild(this.contentEditable);
        }

        // init plugins:
        this.plugins.forEach(plugin => plugin.initialize(this, this.container));

        // setup event listeners:
        document.addEventListener('keydown', this.handleKeyDown);
        this.contentEditable.addEventListener('input', this.handleContentChange);

        if (this.config.focusOnStart) {
            this.contentEditable.focus();
        }
    }

    public loadBlob(blob?) {
        if (blob) this.blob = blob;
        if (!this.contentEditable) return console.error('Cannot load blob: ContentEditable is null');
        if (!this.blob) return console.error("No blob given to load.");
        this.contentEditable.innerHTML = '';

        // create a root node:
        this.nodeCache.hydrateContent(this.blob.content.entries, this.contentEditable);

        //this.convertToHTML(this.blob.content, this.contentEditable);
        // todo: should hydrate node cache
    }

    // todo: on shift+enter... should manually insert the break entry after the current node in it's parent
    // ... so that it does not trigger a full re-build of the parent node and it's content.
    // todo: on enter... should create the group node but without the break?
    // bug: multiple break chilren arent added to ner.children but are seen in entry.children.
    private handleKeyDown = (e) => {
        if (e.target == this.contentEditable) {
            e.stopPropagation();
            if (e.key == 'Enter') {
                this.handleEnter(e);
            } else if (e.key == 'Backspace') {
                this.handleBackspace(e);
            }
        }
    }

    private handleEnter = (e) => {
        const node = this.getCurrentEditingNode();
        console.log(`Enter`, node, e);
    }

    private handleBackspace = (e) => {
        const node = this.getCurrentEditingNode();
        // if the current editing node has no children or content, delete it from the tree
        if (node) {
            //
            console.log(`backspace on edit node:`, node, node.childNodes, node.innerHTML);
            if (node.innerHTML == '<br>') {
                //console.log(`DELETE NODE`, node);
                this.nodeCache.deleteNode(node);
                // if it's the root node don't delete it...
                if (node.classList.contains(CONTENT_ROOT_CLASS)) {
                    //node.innerHTML = '';
                }
                return;// e.preventDefault();
            } else {
                if (node.nodeType != Node.TEXT_NODE) {
                    console.log(`DELETE by node type...`, node, node.nodeType, node.classList, 'parent:', node.parentNode)
                    //return e.preventDefault();
                }
            }
        }
    }

    private handleContentChange = (e) => {
        // Find the node where the edit took place
        let editNode: Node | undefined = this.getCurrentEditingNode();
        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            editNode = range?.commonAncestorContainer;
        }

        // Apply the changes immediately to the entry, for throttled commit later
        this.applyChanges(editNode);
    }

    // updates the given node's entry with it's changed content
    private applyChanges(node) {
        if (!node) throw "No node given to applyChanges()";

        const entry = ContentEntries.convertNodeToEntry(node)
        const change = this.nodeCache.applyChange(node, entry);
        // todo: can store or serialize change object to backend or other clients.

        // Signal to save all pending changes after timeout.
        // One timer will (definitely) autosave content every X secs, and the other saves after the last keypress.
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
        if (!this.contentEditable) throw "Cannot apply changes: ContentEditable is null";

        // Clear the auto-save and auto-change timeouts since we're saving now
        if (this.autoSaveTimeoutId) this.autoSaveTimeoutId = clearTimeout(this.autoSaveTimeoutId);
        if (this.applyChangesTimeoutId) this.applyChangesTimeoutId = clearTimeout(this.applyChangesTimeoutId);

        const content: BlobContent = { entries: this.nodeCache.entries };
        this.onChangeHandler(content);
        return content;
    }

    // helper to clear all content (for dev)
    public clearContent(commit?) {
        if (this.contentEditable) {
            this.contentEditable.innerHTML = '';
            this.nodeCache.clear();
            if (commit) this.commitChanges();
        }
    }

    private getCurrentEditingNode(): Node | undefined {
        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            return range?.commonAncestorContainer;
        }
    }

}