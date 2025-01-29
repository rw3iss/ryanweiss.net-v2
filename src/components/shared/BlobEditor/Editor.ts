import { Blob } from "../../../lib/types/Blob.js";
import { DragAndDropPlugin } from "./DragAndDropPlugin.js";

export class WYSIWYGEditor {
    constructor(container, titleContainer, initialBlob?) {


        this.container = container;
        this.titleContainer = titleContainer;
        this.throttledOnChange = this.throttle(this.onChange.bind(this), 2000); // Throttle to 2 seconds

        this.init();

        // Initialize the Drag and Drop Plugin
        this.dragAndDropPlugin = new DragAndDropPlugin(this.container, this);

        if (initialBlob) {
            this.loadBlob(initialBlob);
        }
        else this.loadMostRecentBlob();

    }

    init() {
        this.titleInput = document.createElement('input');
        this.titleInput.type = 'text';
        this.titleInput.addEventListener('keyup', () => {
            this.blob.title = this.titleInput.value;
            this.saveEdits();
        });
        this.titleContainer.appendChild(this.titleInput)

        this.container.contentEditable = true;

        this.container.addEventListener('input', () => {
            console.log('Input event fired'); // Debugging: Check if the event fires
            this.throttledOnChange();
        });
        this.container.addEventListener('contextmenu', this.showContextMenu.bind(this));
    }

    loadMostRecentBlob() {
        let mostRecentBlob = null;
        let mostRecentDate = null;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const blobData = JSON.parse(localStorage.getItem(key));

            if (blobData && blobData.lastSaved) {
                const blobDate = new Date(blobData.lastSaved);

                if (!mostRecentDate || blobDate > mostRecentDate) {
                    mostRecentBlob = blobData;
                    mostRecentDate = blobDate;
                }
            }
        }

        if (mostRecentBlob) {
            this.loadBlob(mostRecentBlob);
            console.log('Loaded most recent Blob:', this.blob);
        } else {
            console.log('No Blobs found in localStorage.');
        }
    }

    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    triggerInputEvent() {
        const event = new Event('input', { bubbles: true });
        this.container.dispatchEvent(event);
        this.applyEdits();
    }

    onChange() {
        this.applyEdits();
        this.saveEdits();
    }

    parseContentToHTML(content) {
        let html = '';
        content.forEach(item => {
            if (item.type === 'file') {
                // Render file preview
                html += this.renderFilePreview(item);
            } else {
                // Render regular HTML elements
                html += this.parseElementToHTML(item);
            }
        });
        return html;
    }

    renderFilePreview(file) {
        let previewHTML = '';

        if (file.mimeType.startsWith('image/')) {
            previewHTML = `<img src="${file.data}" style="width: 100%; height: 100%; object-fit: cover;" />`;
        } else if (file.mimeType.startsWith('video/')) {
            previewHTML = `<video src="${file.data}" controls style="width: 100%; height: 100%;"></video>`;
        } else if (file.mimeType.startsWith('audio/')) {
            previewHTML = `<audio src="${file.data}" controls style="width: 100%; height: 100%;"></audio>`;
        } else if (file.mimeType === 'model/stl' || file.mimeType === 'application/sla') {
            previewHTML = `<canvas width="150" height="150"></canvas>`;
        } else {
            previewHTML = `<div style="text-align: center; line-height: 150px;">Unsupported file type</div>`;
        }

        return `
            <div style="width: 150px; height: 150px; margin: 5px; display: inline-block; border: 1px solid #ccc;">
                ${previewHTML}
            </div>
        `;
    }

    parseElementToHTML(element) {
        let attrs = '';
        if (element.attributes) {
            attrs = Object.entries(element.attributes).map(([key, value]) => `${key}="${value}"`).join(' ');
        }
        let children = '';
        if (Array.isArray(element.children)) {
            children = element.children.map(child => this.parseElementToHTML(child)).join('');
        } else {
            children = element.children || '';
        }
        return `<${element.type} ${attrs}>${children}</${element.type}>`;
    }

    applyEdits() {
        const content = this.parseHTMLToContent(this.container.innerHTML);
        this.blob.content = content;
    }

    saveEdits() {
        this.blob.lastSaved = new Date().toISOString(); // Add current date and time
        localStorage.setItem(this.blob.id, JSON.stringify(this.blob));
        console.log('Saved Blob:', this.blob);
    }

    parseHTMLToContent(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return this.parseNodeToContent(doc.body);
    }

    parseNodeToContent(node) {
        return Array.from(node.childNodes).map(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                return {
                    type: 'text',
                    children: child.textContent,
                };
            } else if (child.tagName.toLowerCase() === 'img') {
                return {
                    type: 'file',
                    name: 'image',
                    mimeType: 'image/png', // Placeholder
                    size: 0, // Placeholder
                    data: child.src,
                };
            } else if (child.tagName.toLowerCase() === 'video') {
                return {
                    type: 'file',
                    name: 'video',
                    mimeType: 'video/mp4', // Placeholder
                    size: 0, // Placeholder
                    data: child.src,
                };
            } else if (child.tagName.toLowerCase() === 'audio') {
                return {
                    type: 'file',
                    name: 'audio',
                    mimeType: 'audio/mp3', // Placeholder
                    size: 0, // Placeholder
                    data: child.src,
                };
            } else {
                return {
                    type: child.tagName.toLowerCase(),
                    attributes: Array.from(child.attributes).reduce((acc, attr) => {
                        acc[attr.name] = attr.value;
                        return acc;
                    }, {}),
                    children: this.parseNodeToContent(child),
                };
            }
        });
    }

    loadBlob(id) {
        const blobData = JSON.parse(localStorage.getItem(id));
        if (blobData) {
            this.blob = new Blob(blobData.id, blobData.type, blobData.title, blobData.content);
            this.titleInput.value = this.blob.title; // Update the title input field
            this.container.innerHTML = this.parseContentToHTML(this.blob.content); // Render content and file previews
            console.log('Loaded Blob:', this.blob);
        }
    }

    showContextMenu(event) {
        event.preventDefault();
        const menu = document.createElement('div');
        menu.style.position = 'absolute';
        menu.style.left = `${event.pageX}px`;
        menu.style.top = `${event.pageY}px`;
        menu.style.backgroundColor = 'white';
        menu.style.border = '1px solid black';
        menu.style.padding = '5px';
        menu.innerHTML = `
            <button onclick="editor.applyFormatting('bold')">B</button>
            <button onclick="editor.applyFormatting('italic')">I</button>
            <button onclick="editor.applyFormatting('ul')">UL</button>
            <button onclick="editor.removeFormatting()">Remove Formatting</button>
        `;
        document.body.appendChild(menu);
        setTimeout(() => document.body.removeChild(menu), 2000);
    }

    applyFormatting(format) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const newNode = document.createElement(format === 'ul' ? 'ul' : 'span');
            newNode.style.fontWeight = format === 'bold' ? 'bold' : 'normal';
            newNode.style.fontStyle = format === 'italic' ? 'italic' : 'normal';
            if (format === 'ul') {
                const li = document.createElement('li');
                li.appendChild(range.extractContents());
                newNode.appendChild(li);
            } else {
                newNode.appendChild(range.extractContents());
            }
            range.insertNode(newNode);
        }
        this.triggerInputEvent(); // Manually trigger the input event
    }

    removeFormatting() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const text = range.extractContents().textContent;
            range.insertNode(document.createTextNode(text));
        }
        this.triggerInputEvent(); // Manually trigger the input event
    }
}