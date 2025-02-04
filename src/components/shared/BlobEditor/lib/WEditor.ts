import { ContentEntries } from 'components/shared/BlobEditor/ContentEntries';
import { Blob, BlobContent } from 'types/Blob';
import { ContentEntry } from '../ContentEntries';
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

    constructor(container: HTMLElement | null, blob: Blob, onChange: (content: BlobContent) => void, plugins: IPlugin[] = []) {
        this.container = container;
        this.blob = blob;
        this.contentEditable = null;
        this.onChangeHandler = onChange;
        this.plugins = plugins || [];
        this.initialize();
        this.initPlugins();
    }

    // clear content
    public clearContent() {
        this.contentEditable.innerHTML = '';
        this.applyChanges();
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

    private handleContentChange = () => {
        this.dirty = true;

        // Clear previous timeout for the 'save after stopping' and set a new timeout
        if (this.applyChangesTimeoutId) clearTimeout(this.applyChangesTimeoutId);
        this.applyChangesTimeoutId = setTimeout(() => {
            console.log(`autochange...`)
            this.applyChanges();
        }, CHANGE_TIMEOUT_MS);

        // If not set to autosave already, start timeout
        if (!this.autoSaveTimeoutId) {
            this.autoSaveTimeoutId = setTimeout(() => {
                console.log(`autosave...`)
                this.applyChanges(); // This ensures at least one save operation every 2 seconds
            }, AUTOSAVE_TIMEOUT_MS);
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
        content.entries.forEach(entry => {
            ContentEntries.convertToHTMLByType(entry, parent);
        });
    }

    public applyChanges(): BlobContent | null {
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

        const entries: ContentEntry[] = [];
        const nodes = Array.from(this.contentEditable.childNodes);
        nodes.forEach(node => {
            const entry = ContentEntries.convertNodeToEntry(node);
            if (entry) entries.push(entry);
        });

        const content: BlobContent = { entries };
        this.onChangeHandler(content);

        return content;
    }

    public updateContent(newContent: BlobContent) {
    }
}