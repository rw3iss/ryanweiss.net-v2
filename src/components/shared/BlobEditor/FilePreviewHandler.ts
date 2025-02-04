import { WEditor } from './lib/WEditor';

export class FilePreviewHandler {
    private editor: WEditor;

    constructor(editor: WEditor) {
        this.editor = editor;
    }

    public createPreview(file: File, range: Range): void {
        let previewElement: HTMLElement;
        console.log(`insert file`, file.type)

        if (file.type.startsWith('image/')) {
            previewElement = this.renderImage(file);
        } else if (file.type.startsWith('video/')) {
            previewElement = this.renderVideo(file);
        } else if (file.type.startsWith('audio/')) {
            previewElement = this.renderAudio(file);
        } else if (file.type.startsWith('text/')) {
            previewElement = this.renderText(file);
        } else {
            previewElement = this.renderGeneric(file);
        }

        // Add attributes to the preview element
        previewElement.setAttribute('data-file-type', file.type);
        previewElement.setAttribute('data-file-size', file.size.toString());
        previewElement.setAttribute('data-file-name', file.name);

        // Insert the preview element
        range.deleteContents();
        range.insertNode(previewElement);
        range.setStartAfter(previewElement);
        range.collapse(true);

        // Update selection to reflect new content
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }

        // Trigger content change
        this.editor.applyChanges();
    }

    private renderImage(file: File): HTMLElement {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        return this.wrapPreview(img, 'image');
    }

    private renderVideo(file: File): HTMLElement {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        return this.wrapPreview(video, 'video');
    }

    private renderAudio(file: File): HTMLElement {
        const audio = document.createElement('audio');
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        return this.wrapPreview(audio, 'audio');
    }

    private renderText(file: File): HTMLElement {
        const div = document.createElement('div');
        div.textContent = file.name;
        return this.wrapPreview(div, 'text');
    }

    private renderGeneric(file: File): HTMLElement {
        const div = document.createElement('div');
        div.textContent = file.name;
        return this.wrapPreview(div, 'file');
    }

    private wrapPreview(element: HTMLElement, type: string): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('contenteditable', "false");
        wrapper.className = `file-preview ${type}-preview`;
        wrapper.appendChild(element);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', () => this.removePreview(wrapper));
        wrapper.appendChild(deleteButton);

        return wrapper;
    }

    private removePreview(previewElement: HTMLElement) {
        previewElement.remove();
        this.editor.applyChanges(); // This will trigger the content update and save
    }
}