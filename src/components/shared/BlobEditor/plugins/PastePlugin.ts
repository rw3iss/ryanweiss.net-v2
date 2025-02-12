import { WEditor } from '../lib/WEditor';
import { IPlugin } from './IPlugin';

export class PastePlugin implements IPlugin {

    private config;

    constructor(config: {}) {
        this.config = config;
    }

    initialize(editor: WEditor, container: HTMLElement) {
        container.addEventListener('paste', this.handlePaste);
    }

    private handleToolbarPaste = (e) => {
        console.log(`toolbar paste click.`)
    }

    toolbar = {
        type: 'button',
        icon: '/public/icons/icon-paste.svg',
        label: 'Paste',
        onClick: this.handleToolbarPaste
    };

    private handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();
        const clipboardData = e.clipboardData || (window as any).clipboardData;
        if (!clipboardData) return;

        let pastedContent = clipboardData.getData('text/html') || clipboardData.getData('text/plain');

        if (pastedContent && this.containsHTML(pastedContent) && this.config.sanitize) {
            pastedContent = this.sanitizeContent(pastedContent);
        }

        console.log(`paste`, pastedContent)
        // todo: need to tell system to create and insert node from pasted div container...

        this.insertContent(pastedContent, e.target as HTMLElement);
    };

    private containsHTML(content: string): boolean {
        // A simple check for HTML tags
        return /<[^>]+>/i.test(content);
    } s

    private sanitizeContent(content: string): string {
        // Remove style attributes using regex, supporting both single and double quotes
        return content.replace(/style=(["'])(?:(?=(\\?))\2.)*?\1/g, '');
    }

    private insertContent(content: string, target: HTMLElement) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount) {
            const range = selection.getRangeAt(0);
            range.deleteContents();

            // Create a temporary div to parse HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;

            // Move nodes from tempDiv to the range
            let node: Node | null;
            while ((node = tempDiv.firstChild)) {
                range.insertNode(node);
            }

            const space = document.createTextNode(" ");
            const br = document.createElement("br");
            range.insertNode(space);
            range.insertNode(br);

            // Collapse the range after the inserted content
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}