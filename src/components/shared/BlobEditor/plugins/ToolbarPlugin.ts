import { WEditor } from '../lib/WEditor';
import { Dropdown } from './Dropdown'; // Assuming Dropdown class is in this file
import { IPlugin } from './IPlugin';

export function createToolbarItem(item: any, parent: HTMLElement, toolbar: ToolbarPlugin) {
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
            button.addEventListener('click', () => {
                item.onClick.call(toolbar);
                this.hideToolbar();
            });
        }
        parent.appendChild(button);
    } else if (item.type === 'dropdown') {
        const dropdownButton = document.createElement('button');
        dropdownButton.className = 'toolbar-dropdown-button';
        if (item.icon) {
            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.alt = item.label;
            dropdownButton.appendChild(icon);
        }
        if (item.label) {
            const label = document.createElement('span');
            label.textContent = item.label;
            dropdownButton.appendChild(label);
        }

        const arrow = document.createElement('span');
        arrow.textContent = '▼'; // Down arrow symbol
        dropdownButton.appendChild(arrow);

        const dropdown = new Dropdown(dropdownButton, item.items);
        parent.appendChild(dropdownButton);
    } else if (item.type === 'group') {
        const group = document.createElement('div');
        group.className = 'toolbar-group';
        if (Array.isArray(item.items)) {
            item.items.forEach((groupItem: any) => createToolbarItem(groupItem, group, toolbar));
        }
        parent.appendChild(group);
    }
    return parent;
}

export class ToolbarPlugin implements IPlugin {
    public editor: WEditor;
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

        this.editor.plugins.forEach(plugin => {
            if (plugin instanceof ToolbarPlugin) return; // skip this plugin since we start with its items.
            if ('toolbar' in plugin) {
                this.toolbar.items.unshift(plugin.toolbar);
            }
        });

        if (this.toolbar.items.length > 0) {
            createToolbarItem(this.toolbar, this.toolbarContainer, this);
        } else {
            this.toolbarContainer.style.display = 'none';
        }
    }

    private checkForSelection = (e: MouseEvent) => {
        const s = window.getSelection()?.toString().length;
        console.log(`up`, s, window.getSelection())
        if (s > 0) {
            this.showToolbar(e);
        } else {
            this.hideToolbar();
        }
    };

    private showToolbar = (e: MouseEvent) => {
        if (!this.toolbarContainer || this.toolbarContainer.children.length === 0) return;
        if (this.isVisible) return;

        console.log(`show`, e);
        e.preventDefault();
        e.stopPropagation();

        // Calculate initial position but do not reposition on item clicks
        const rect = e.target instanceof Element ? e.target.getBoundingClientRect() : { top: 0, left: 0 };
        const windowWidth = window.innerWidth;

        this.toolbarContainer.style.top = `${rect.top - this.toolbarContainer.offsetHeight}px`;
        this.toolbarContainer.style.left = `${e.clientX + 20}px`;

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

        // Hide all dropdowns when toolbar is hidden
        Array.from(this.toolbarContainer.querySelectorAll('.dropdown-menu')).forEach(menu => {
            menu.style.display = 'none';
            menu.style.opacity = '0';
        });
    };

    private handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.isVisible) {
            this.hideToolbar();
        }
    };

    toolbar = {
        type: 'group',
        items: [
            {
                type: 'dropdown',
                icon: '/public/icons/icon-cog.svg',
                label: 'Config',
                items: [
                    {
                        type: 'button',
                        icon: '/public/icons/icon-theme.svg',
                        label: 'Theme',
                        onClick: (t) => { console.log('Theme button clicked') }
                    },
                    {
                        type: 'button',
                        icon: '/public/icons/icon-history.svg',
                        label: 'History',
                        onClick: (t) => console.log('History button clicked')
                    }
                ]
            },
            {
                type: 'button',
                icon: '/public/icons/icon-close.svg',
                label: 'Close',
                onClick: this.hideToolbar
            }
        ]
    };
}