import { WEditor } from '../lib/WEditor';
import { IPlugin } from './IPlugin';

export class ToolbarPlugin implements IPlugin {
    private editor: WEditor;
    private toolbarContainer: HTMLDivElement | null = null;
    private isVisible: boolean = false;

    constructor() {
        // No need for initial creation here
    }

    initialize(editor: WEditor, container: HTMLElement) {
        this.editor = editor;
        this.initUI(container);
        container.addEventListener('mouseup', this.checkForSelection);
        container.addEventListener('contextmenu', this.showToolbar);
        document.addEventListener('keydown', this.handleEscapeKey);
    }

    private initUI(container: HTMLElement) {
        if (!this.toolbarContainer) {
            this.toolbarContainer = document.createElement('div');
            this.toolbarContainer.className = 'toolbar-container';
            this.toolbarContainer.style.display = 'none'; // Initially hidden
            container.appendChild(this.toolbarContainer);
        }

        this.toolbarContainer.innerHTML = ''; // Clear previous content

        let hasItems = false;
        this.editor.plugins.forEach(plugin => {
            if ('toolbar' in plugin) {
                this.createToolbarItem(plugin.toolbar);
                hasItems = true;
            }
        });

        // Only show toolbar if there are items
        if (!hasItems) {
            this.toolbarContainer.style.display = 'none';
        }
    }

    private createToolbarItem(item: any) {
        if (item.type === 'button') {
            const button = document.createElement('button');
            button.className = 'toolbar-button';
            if (item.icon) {
                const icon = document.createElement('img');
                icon.src = item.icon;
                icon.alt = item.label;
                button.appendChild(icon);
            }
            if (item.label) {
                const label = document.createElement('span');
                label.textContent = item.label;
                button.appendChild(label);
            }
            if (item.onClick) {
                // Wrap onClick to hide toolbar after action
                button.addEventListener('click', () => {
                    item.onClick.call(this.editor);
                    this.hideToolbar();
                });
            }
            this.toolbarContainer?.appendChild(button);
        } else if (item.type === 'group') {
            const group = document.createElement('div');
            group.className = 'toolbar-group';
            item.items.forEach((groupItem: any) => this.createToolbarItem(groupItem));
            this.toolbarContainer?.appendChild(group);
        }
    }

    private checkForSelection = (e: MouseEvent) => {
        if (window.getSelection()?.toString().length > 0) {
            this.showToolbar(e);
        } else {
            this.hideToolbar();
        }
    };

    private showToolbar = (e: MouseEvent) => {
        if (!this.toolbarContainer || this.toolbarContainer.children.length === 0) return;

        const rect = e.target instanceof Element ? e.target.getBoundingClientRect() : { top: 0, left: 0 };
        const windowWidth = window.innerWidth;

        this.toolbarContainer.style.top = `${rect.top - this.toolbarContainer.offsetHeight}px`;
        this.toolbarContainer.style.left = `${e.clientX}px`;

        // Adjust position if toolbar goes off-screen
        if (e.clientX + this.toolbarContainer.offsetWidth > windowWidth) {
            this.toolbarContainer.style.left = `${windowWidth - this.toolbarContainer.offsetWidth}px`;
        }

        this.toolbarContainer.style.display = 'flex';
        this.isVisible = true;
    };

    private hideToolbar = () => {
        if (!this.toolbarContainer) return;

        this.toolbarContainer.style.display = 'none';
        this.isVisible = false;
    };

    private handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.isVisible) {
            this.hideToolbar();
        }
    };
}