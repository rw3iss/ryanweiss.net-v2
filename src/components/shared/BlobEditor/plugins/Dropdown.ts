import { createToolbarItem } from 'components/shared/BlobEditor/plugins/ToolbarPlugin';
import { ToolbarPlugin } from './ToolbarPlugin.ts';

export class Dropdown {
    private dropdownButton: HTMLElement;
    private dropdownMenu: HTMLDivElement;
    private items: any[];
    private toolbar;
    private hideTimeout: number | null = null;
    private isVisible: boolean = false;

    constructor(button: HTMLElement, items: any[], toolbar: ToolbarPlugin) {
        this.dropdownButton = button;
        this.items = items;
        this.toolbar = toolbar;
        this.dropdownMenu = this.createDropdownMenu();
    }

    private createDropdownMenu(): HTMLDivElement {
        const menu = document.createElement('div');
        menu.className = 'dropdown-menu';
        menu.style.display = 'none';

        this.items.forEach(item => {
            createToolbarItem(item, menu, this.toolbar)
        });

        this.dropdownButton.appendChild(menu);

        menu.addEventListener('mouseleave', this.startHideTimer.bind(this));
        menu.addEventListener('mouseenter', this.clearHideTimer.bind(this));

        this.dropdownButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(`click`, e.target)
            if (this.dropdownMenu.style.display == 'flex') this.hide();
            else this.show();
        });

        return menu;
    }

    public show() {
        console.log(`show dropdown`, this.isVisible)
        //if (!this.isVisible) {
        this.positionDropdown();
        this.dropdownMenu.style.display = 'flex';
        this.dropdownMenu.style.opacity = '1';
        this.isVisible = true;
        //}
    }

    private positionDropdown() {
        if (!this.isVisible) {
            const buttonRect = this.dropdownButton.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Store initial position for consistent positioning
            // this.dropdownMenu.style.top = `${buttonRect.bottom + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-y-offset'))}px`;
            // this.dropdownMenu.style.left = `${buttonRect.left + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-x-offset'))}px`;

            // Adjust if dropdown goes off-screen
            if (buttonRect.left + this.dropdownMenu.offsetWidth > windowWidth) {
                this.dropdownMenu.style.left = `${windowWidth - this.dropdownMenu.offsetWidth - parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-x-offset'))}px`;
            }
        }
    }

    private startHideTimer() {
        this.hideTimeout = window.setTimeout(() => {
            this.hide();
        }, 500);
    }

    private clearHideTimer() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }

    private hide() {
        this.dropdownMenu.style.display = 'none';
        this.dropdownMenu.style.opacity = '0';
        this.isVisible = false;
    }

    private createToolbarItem(item: any, parent: HTMLElement) {
        if (item.type === 'group') {
            const group = document.createElement('div');
            group.className = 'toolbar-group';
            parent.appendChild(group);

            if (Array.isArray(item.items)) {
                item.items.forEach((groupItem: any) => this.createToolbarItem(groupItem, group));
            }
        } else if (item.type === 'dropdown') {
            // For nested dropdowns within dropdowns, we would create another Dropdown instance
            // but for simplicity, we'll just render a button here:
            const nestedDropdownButton = document.createElement('button');
            nestedDropdownButton.className = 'toolbar-dropdown-button nested';
            if (item.icon) {
                const icon = document.createElement('img');
                icon.src = item.icon;
                icon.alt = item.label;
                nestedDropdownButton.appendChild(icon);
            }
            if (item.label) {
                const label = document.createElement('span');
                label.textContent = item.label;
                nestedDropdownButton.appendChild(label);
            }
            parent.appendChild(nestedDropdownButton);
            // Note: In a real scenario, you might want to handle nested dropdowns more dynamically
        }
    }
}