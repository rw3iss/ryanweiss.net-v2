import { WEditor } from './lib/WEditor';

const rowLabelEl = (label, innerHtml) => {
    const el = document.createElement('div');
    el.className = 'row-label';
    el.innerHTML = `<span class="label">${label}</span><div class="inner">${innerHtml}</div>`;
    return el;
};

const printBytes = (b) => {
    let kb = b / 1024;
    let mb = kb / 1024;
    if (mb >= 1) {
        let kbr = kb - (mb * 1024);
        return `${mb.toFixed(0)}Mb${kbr > 0 ? `${kbr}Kb` : ``}`;
    } else {
        if (kb >= 1) {
            let br = b - (kb * 1024);
            return `${kb.toFixed(0)}Kb${br > 0 ? `${br}B` : ``}`;
        }
        return `${b}B`;
    }
};

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
        return this.wrapPreview(img, file, 'image');
    }

    private renderVideo(file: File): HTMLElement {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        return this.wrapPreview(video, file, 'video');
    }

    private renderAudio(file: File): HTMLElement {
        const audio = document.createElement('audio');
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        return this.wrapPreview(audio, file, 'audio');
    }

    private renderText(file: File): HTMLElement {
        const div = document.createElement('div');
        div.textContent = file.name;
        return this.wrapPreview(div, file, 'text');
    }

    private renderGeneric(file: File): HTMLElement {
        const div = document.createElement('div');
        div.textContent = file.name;
        return this.wrapPreview(div, file, 'file');
    }

    private wrapPreview(element: HTMLElement, file, type: string): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('contenteditable', "false");
        wrapper.className = `file-preview ${type}-preview`;

        const thumb = document.createElement('div');
        thumb.classList.add('file-thumb');
        thumb.appendChild(element);
        wrapper.appendChild(thumb);

        // Add info section + options
        const meta = document.createElement('div');
        meta.className = 'file-options';

        const info = document.createElement('div');
        info.className = 'file-info';
        info.appendChild(rowLabelEl('Name:', file.name));
        info.appendChild(rowLabelEl('Size:', printBytes(file.size)));

        meta.appendChild(info);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = "remove-button";
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => this.removePreview(wrapper));
        meta.appendChild(deleteButton);

        wrapper.appendChild(meta);

        console.log(`add file`, file)

        return wrapper;
    }

    private removePreview(previewElement: HTMLElement) {
        previewElement.remove();
        this.editor.applyChanges(); // This will trigger the content update and save
    }
}