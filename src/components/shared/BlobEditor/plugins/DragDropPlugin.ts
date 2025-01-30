import { FilePreviewHandler } from '../FilePreviewHandler';
import { WEditor } from '../lib/WEditor';
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
    }

    private handleToolbarFile = (e) => {
        console.log(`toolbar file click.`)
    }

    toolbar = {
        type: 'group',
        items: [
            {
                type: 'button',
                icon: '/public/icons/icon-add-file.svg',
                label: '+File',
                onClick: this.handleToolbarFile
            },
            {
                type: 'button',
                icon: '/public/icons/icon-test.svg',
                label: 'Test',
                onClick: this.handleToolbarFile
            }
        ]
    };


    private handleDragOver = (e: DragEvent) => {
        console.log(`drag over`)
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