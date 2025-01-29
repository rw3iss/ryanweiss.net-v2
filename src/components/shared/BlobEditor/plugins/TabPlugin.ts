import { WEditor } from '../WEditor';
import { IPlugin } from './IPlugin.ts';

export class TabPlugin implements IPlugin {

    initialize(editor: WEditor, container: HTMLElement): IPlugin {
        container.addEventListener('keydown', this.handleTabKey, true); // Capture phase to catch the event before it bubbles
        return this;
    }

    private handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            e.stopPropagation();
            const selection = window.getSelection();
            if (selection && selection.rangeCount) {
                const range = selection.getRangeAt(0);
                range.deleteContents();

                const tabSpaces = document.createTextNode('\u00a0\u00a0\u00a0\u00a0'); // Use non-breaking spaces
                range.insertNode(tabSpaces);

                // Move the cursor after the inserted spaces
                range.setStartAfter(tabSpaces);
                range.setEndAfter(tabSpaces); // This ensures cursor moves to the end of inserted text
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);

                // Immediately update the editor content
                if (e.target instanceof HTMLElement) {
                    const editor = e.target.closest('.wysiwyg-container')?.['editor'] as WEditor;
                    if (editor) editor.applyChanges();
                }
            }
        }
    };
}