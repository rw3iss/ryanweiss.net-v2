import { NodeEntryCache } from 'components/shared/BlobEditor/lib/NodeEntryCache/NodeEntryCache';
import { Blob, BlobContent } from 'types/Blob';
import { IPlugin } from '../plugins/IPlugin';
import { nerUtils } from './NodeEntryCache/nerUtils.js';
import { getLogger } from 'utils/logging';
import { debugState } from '../../../../lib/utils/debug/DebugPanel.js';

const { log, error } = getLogger('WEditor', { color: 'blue', enabled: true });

const CHANGE_TIMEOUT_MS = 500; // time delay to save after last key/input
const AUTOSAVE_TIMEOUT_MS = 3000; // time delay to save automatically

const CONTENT_ROOT_CLASS = 'w-content';

type WEditorConfig = {
    focusOnStart: boolean;
};

const DEFAULT_CONFIG = (): WEditorConfig => ({
    focusOnStart: false
});

export class WEditor {
    private contentEditable: HTMLDivElement | null;

    private applyChangesTimeoutId: Timeout | null = null;
    private autoSaveTimeoutId: Timeout | null = null;

    private blob: Blob;
    private nodeCache: NodeEntryCache;

    private lastContentChangeType: string | undefined;

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
        this.plugins.forEach((plugin) => plugin.initialize(this, this.container));

        // setup event listeners:
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
        this.contentEditable.addEventListener('input', this.handleContentChange);

        if (this.config.focusOnStart) {
            this.contentEditable.focus();
        }
    }

    public loadBlob(blob?) {
        if (blob) this.blob = blob;
        if (!this.contentEditable) return console.error('Cannot load blob: ContentEditable is null');
        if (!this.blob) return console.error('No blob given to load.');
        this.contentEditable.innerHTML = '';

        // create a root node:
        this.nodeCache.hydrateContent(this.blob.content.entries, this.contentEditable);
        this.debugState();

        //this.convertToHTML(this.blob.content, this.contentEditable);
        // todo: should hydrate node cache
    }

    private handleKeyDown = (e) => {
        if (e.target == this.contentEditable) {
            e.stopPropagation();
            if (e.key == 'Enter') {
                this.handleEnter(e);
            } else if (e.key == 'Backspace') {
                // if the node will be empty then prevent default and let the keyup handle it.
                //e.preventDefault();
                this.handleBackspace(e);
            }
        }
    };

    // todo: on shift+enter... should manually insert the break entry after the current node in it's parent
    // ... so that it does not trigger a full re-build of the parent node and it's content.
    // todo: on enter... should create the group node but without the break?
    // bug: multiple break chilren arent added to ner.children but are seen in entry.children.
    private handleKeyUp = (e) => {
        if (e.target == this.contentEditable) {
            //e.stopPropagation();
            if (e.key == 'Enter') {
                //this.handleEnter(e);
            } else if (e.key == 'Backspace') {
                //this.handleBackspace(e);
            }
        }
    };

    private handleEnter = (e) => {
        const node = this.getCurrentEditingNode();
        log(`Enter`, node, e);
        this.lastEnterNode = node;
        if (e.shiftKey) {
            // e.preventDefault();
        }
    };

    // TODO: Detect backspace on keydown... if the current node is empty, delete the node in entry and ner tree, and allow the event to continue deleting it in the dom.
    private handleBackspace = (e) => {
        const node = this.getCurrentEditingNode() as HTMLElement;
        const childNodes = Array.from(node.childNodes);
        // if the current editing node has no children or content, delete it from the tree
        if (node) {
            //
            // if it's not a text node, it means we broke into the previous node and removed the last one.
            if (node.nodeType != Node.TEXT_NODE) {
                log(`backspace on edit node:`, node, childNodes, node.innerHTML);
                return;
                // go through all node's children and remove any that no longer exist
                const ner = nerUtils.findNER(node, this.nodeCache);
                if (ner) {
                    setTimeout(() => {
                        log(`nodes after timeout:`, node, childNodes, node.innerHTML);
                        ner.children.forEach((c, i) => {
                            const exists = Array.from(node.childNodes).find((cn) => c.node == cn);
                            if (!exists) {
                                // remove from ner.entry.children and ner.children.
                                const childEntry = c.entry;
                                if (Array.isArray(ner.entry?.children)) {
                                    const di = ner.entry.children.findIndex((ec) => ec == childEntry);
                                    log(`DELETING child entry:`, di, childEntry);
                                    if (di > -1) ner.entry.children.splice(di, 1);
                                }
                                log(`DELETING NER:`, i, c);
                                ner.children.splice(i, 1);
                            }
                            {
                                log(`node still exists.`, c, i);
                            }
                        });
                    }, 0);
                } else {
                    console.error(`NER not found on backspace??`);
                }

                if (node.classList.contains(CONTENT_ROOT_CLASS)) {
                    //node.innerHTML = '';
                }

                this.nodeCache.deleteNER(node);
            } else {
                // todo: need to get text on key up...
                log(`backspace on text node:`, node);
                return; //, `text: "${node.textContent}", html: "${node.innerHTML}"`);
                // if text has become empty, remove the node... ?

                // try to find the text node?
                let ner = nerUtils.findNER(node, this.nodeCache);
                if (ner) log(`Text node FOUND:`, ner);
                else {
                    log(`! Text node NOT found !`, node);
                }
            }
        }
    };

    private handleContentChange = (e) => {
        // Find the node where the edit took place
        let editNode: Node | undefined = this.getCurrentEditingNode();
        log(`handleContentChange(): ${e.inputType}`, editNode);

        switch (e.inputType) {
            case 'insertText':
                break;
            case 'deleteContentBackward':
                break;
            case 'insertParagraph':
                break;
            case 'insertLineBreak':
                // if (this.lastEnterNode && this.lastEnterNode != editNode) {
                //     console.log(`ENTER in parent.`, editNode, this.lastEnterNode, this.lastEnterNode.nextSibling, this.lastEnterNode.nextSibling?.nextSibling, this.lastEnterNode.nextSibling?.nodeName);
                //     const doubleSibling = this.lastEnterNode.nextSibling?.nextSibling;
                //     if (doubleSibling?.nodeName == 'BR') {
                //         //console.log(`REMOVING BREAK.`);
                //         doubleSibling.remove();
                //     }
                // } else {
                //     console.log(`ENTER in child.`, editNode, this.lastEnterNode);
                // }
                break;
            case 'insertFromPaste':
                break;
            case 'deleteByCut':
                // todo: reconcile parent node...
                break;
            default:
                console.log(`Unknown input type:`, e, editNode);
                throw new Error('UNKNOWN INPUT TYPE: ' + e.inputType);
        }

        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            editNode = range?.commonAncestorContainer;
        }

        // Apply the changes immediately to the entry, for throttled commit later
        this.applyChanges(editNode, e.inputType);

        this.lastContentChangeType = e.inputType;

        this.debugState();
    };

    private debugState() {
        debugState('entryTree', this.nodeCache.rootNER?.entry);
        debugState('nerTree', this.nodeCache.rootNER);
    }

    // updates the given node's entry with it's changed content
    private applyChanges(node, inputType) {
        if (!node) throw 'No node given to applyChanges()';

        const change = this.nodeCache.applyChange(node, inputType);
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
        if (!this.contentEditable) throw 'Cannot apply changes: ContentEditable is null';

        // Clear the auto-save and auto-change timeouts since we're saving now
        if (this.autoSaveTimeoutId) this.autoSaveTimeoutId = clearTimeout(this.autoSaveTimeoutId);
        if (this.applyChangesTimeoutId) this.applyChangesTimeoutId = clearTimeout(this.applyChangesTimeoutId);

        const content: BlobContent = { entries: this.nodeCache.getEntries() };
        this.onChangeHandler(content);
        return content;
    }

    // helper to clear all content (for dev)
    public clearContent(commit?) {
        if (this.contentEditable) {
            this.contentEditable.innerHTML = '';
            this.nodeCache.clear();
            if (commit) this.commitChanges();
            this.debugState();
        }
    }

    private getCurrentEditingNode(): Node | undefined {
        if (window.getSelection) {
            let range = window.getSelection()?.getRangeAt(0);
            return range?.commonAncestorContainer;
        }
    }
}
