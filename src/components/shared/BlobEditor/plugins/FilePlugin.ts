import { FilePreviewHandler } from '../FilePreviewHandler';
import { WEditor } from '../lib/WEditor';
import { IPlugin } from './IPlugin';

export class FilePlugin implements IPlugin {
    // private editor: WEditor;
    // private container: HTMLElement;
    private filePreviewHandler: FilePreviewHandler;
    private input: HTMLInputElement;

    initialize(editor: WEditor, container: HTMLElement) {
        //        this.editor = editor;
        //       this.container = container;
        this.filePreviewHandler = new FilePreviewHandler(editor);
        container.addEventListener('mousedown', this.handleMouseDown);
        container.addEventListener('dragstart', this.handleDragStart);
        container.addEventListener('dragover', this.handleDragOver);
        container.addEventListener('drop', this.handleDrop);

        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.multiple = true; // Allow multiple file selection
        this.input.style.display = 'none'; // Keep it hidden
        this.input.addEventListener('change', (e) => {
            this.insertFiles(Array.from(e.target.files));
        });
        container.appendChild(this.input); // Append to the body to ensure it's accessible
    };

    private handleToolbarFile = (e) => {
        this.input.click();
    };

    toolbar = {
        type: 'button',
        icon: '/public/icons/icon-add-file.svg',
        label: 'File',
        onClick: this.handleToolbarFile
    };

    private handleDragOver = (event: DragEvent) => {
        console.log(`drag over`, event);
        event.preventDefault();
    };

    private handleMouseDown = (event) => {
        console.log(`mouse down`, event, event.target.closest('.file-preview') as HTMLElement)
    };

    private handleDragStart = (event: DragEvent) => {
        console.log(`drag start`, event)
        const target = event.target as HTMLElement;
        const filePreview = target.closest('.file-preview') as HTMLElement | null;

        if (filePreview) {
            console.log("Dragging file preview:", filePreview);

            // Clone the preview element for the drag image
            const dragPreview = filePreview.cloneNode(true) as HTMLElement;
            dragPreview.style.position = 'absolute';
            dragPreview.style.top = '-9999px'; // Hide from document layout

            document.body.appendChild(dragPreview); // Add to DOM temporarily

            // Set as the drag image
            event.dataTransfer!.setDragImage(dragPreview, 10, 10);

            // Cleanup after drag ends
            setTimeout(() => document.body.removeChild(dragPreview), 0);
        }
        //event.preventDefault();
    };

    private insertFiles = (files) => {
        files.forEach(file => {
            const selection = window.getSelection();
            console.log(`insert`, file, selection)
            if (selection && selection.rangeCount) {
                const range = selection.getRangeAt(0);
                this.filePreviewHandler.createPreview(file, range);
            }
        });
    };

    private handleDrop = (e: DragEvent) => {
        e.preventDefault();
        if (!e.dataTransfer) return;
        const files = Array.from(e.dataTransfer.files);
        this.insertFiles(files);
    };
}