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

    private handleDragOver = (e: DragEvent) => {
        console.log(`drag over`)
        e.preventDefault();
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