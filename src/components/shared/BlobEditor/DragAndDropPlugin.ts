export class DragAndDropPlugin {
    constructor(container, editor) {
        this.container = container;
        this.editor = editor;
        this.init();
    }

    init() {
        // Prevent default drag-and-drop behavior
        this.container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // Handle file drop
        this.container.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFiles(files);
            }
        });
    }

    async handleFiles(files) {
        for (const file of files) {
            const fileData = await this.readFile(file);
            const preview = this.renderPreview(fileData);
            if (preview) {
                this.container.appendChild(preview);
                this.saveFileToBlob(fileData);
            }
        }
    }

    readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    data: reader.result,
                });
            };
            reader.readAsDataURL(file);
        });
    }

    renderPreview(fileData) {
        const previewContainer = document.createElement('div');
        previewContainer.style.width = '150px';
        previewContainer.style.height = '150px';
        previewContainer.style.margin = '5px';
        previewContainer.style.display = 'inline-block';
        previewContainer.style.border = '1px solid #ccc';

        if (fileData.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = fileData.data;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            previewContainer.appendChild(img);
        } else if (fileData.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = fileData.data;
            video.controls = true;
            video.style.width = '100%';
            video.style.height = '100%';
            previewContainer.appendChild(video);
        } else if (fileData.type.startsWith('audio/')) {
            const audio = document.createElement('audio');
            audio.src = fileData.data;
            audio.controls = true;
            audio.style.width = '100%';
            audio.style.height = '100%';
            previewContainer.appendChild(audio);
        } else if (fileData.type === 'model/stl' || fileData.type === 'application/sla') {
            // STL or 3D file (WebGL rendering)
            const canvas = document.createElement('canvas');
            canvas.width = 150;
            canvas.height = 150;
            previewContainer.appendChild(canvas);
            this.renderSTLPreview(canvas, fileData.data);
        } else {
            // Unsupported file type
            const unsupported = document.createElement('div');
            unsupported.textContent = 'Unsupported file type';
            unsupported.style.textAlign = 'center';
            unsupported.style.lineHeight = '150px';
            previewContainer.appendChild(unsupported);
        }

        return previewContainer;
    }

    renderSTLPreview(canvas, data) {
        // Placeholder for WebGL rendering of STL files
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ccc';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('3D Preview', canvas.width / 2, canvas.height / 2);
    }

    saveFileToBlob(fileData) {
        const fileObject = {
            type: 'file',
            name: fileData.name,
            mimeType: fileData.type,
            size: fileData.size,
            data: fileData.data,
        };

        // Add the file object to the Blob's content
        this.editor.blob.content.push(fileObject);
        this.editor.saveEdits();
    }
}
