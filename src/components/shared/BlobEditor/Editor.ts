export class WYSIWYGEditor {
    constructor(container, initialBlob) {
        this.container = container;
        this.blob = initialBlob;
        this.init();
        this.throttledOnChange = this.throttle(this.onChange.bind(this), 2000); // Throttle to 2 seconds
    }

    init() {
        this.container.contentEditable = true;
        this.container.innerHTML = this.parseContentToHTML(this.blob.content);
        this.container.addEventListener('input', this.throttledOnChange);
        this.container.addEventListener('contextmenu', this.showContextMenu.bind(this));
    }

    throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function (...args) {
            if (!lastRan) {
                func.apply(this, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(this, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    onChange() {
        this.applyEdits();
        this.saveEdits();
    }

    parseContentToHTML(content) {
        let html = '';
        content.forEach(item => {
            html += this.parseElementToHTML(item);
        });
        return html;
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
                    children: child.textContent
                };
            } else {
                return {
                    type: child.tagName.toLowerCase(),
                    attributes: Array.from(child.attributes).reduce((acc, attr) => {
                        acc[attr.name] = attr.value;
                        return acc;
                    }, {}),
                    children: this.parseNodeToContent(child)
                };
            }
        });
    }

    saveEdits() {
        localStorage.setItem(this.blob.id, JSON.stringify(this.blob));
        console.log('Saved Blob:', this.blob);
    }

    loadBlob(id) {
        const blobData = JSON.parse(localStorage.getItem(id));
        if (blobData) {
            this.blob = new Blob(blobData.id, blobData.type, blobData.title, blobData.content);
            this.container.innerHTML = this.parseContentToHTML(this.blob.content);
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
        this.applyEdits();
    }

    removeFormatting() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const text = range.extractContents().textContent;
            range.insertNode(document.createTextNode(text));
        }
        this.applyEdits();
    }
}