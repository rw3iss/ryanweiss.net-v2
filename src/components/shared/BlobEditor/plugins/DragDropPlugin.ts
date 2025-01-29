import { WEditor } from '../WEditor';
import { FilePreviewHandler } from '../FilePreviewHandler';
import { IPlugin } from './IPlugin.ts';

export class DragDropPlugin implements IPlugin {
    // private editor: WEditor;
    // private container: HTMLElement;
    private filePreviewHandler: FilePreviewHandler;

    initialize(editor: WEditor, container: HTMLElement) {
        //        this.editor = editor;
        //       this.container = container;
        this.filePreviewHandler = new FilePreviewHandler(editor);
        container.addEventListener('dragover', this.handleDragOver);
        container.addEventListener('drop', this.handleDrop);
        return this;
    }

    private handleDragOver = (e: DragEvent) => {
        e.preventDefault();
    };

    private handleDrop = (e: DragEvent) => {
        e.preventDefault();

        if (!e.dataTransfer) return;
        const files = Array.from(e.dataTransfer.files);

        files.forEach(file => {
            const selection = window.getSelection();
            if (selection && selection.rangeCount) {
                const range = selection.getRangeAt(0);
                this.filePreviewHandler.createPreview(file, range);
            }
        });
    };
}