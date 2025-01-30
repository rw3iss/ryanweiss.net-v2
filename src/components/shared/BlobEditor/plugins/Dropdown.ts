import { IPlugin } from './IPlugin';

export class Dropdown {
    private dropdownButton: HTMLElement;
    private dropdownMenu: HTMLDivElement;
    private items: any[];
    private hideTimeout: number | null = null;
    private isVisible: boolean = false;

    constructor(button: HTMLElement, items: any[]) {
        this.dropdownButton = button;
        this.items = items;
        this.dropdownMenu = this.createDropdownMenu();
    }

    private createDropdownMenu(): HTMLDivElement {
        const menu = document.createElement('div');
        menu.className = 'dropdown-menu';
        menu.style.display = 'none';

        this.items.forEach(item => {
            if (item.type === 'button') {
                const button = document.createElement('button');
                button.className = 'dropdown-item';
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
                    button.addEventListener('click', item.onClick);
                }
                menu.appendChild(button);
            } else if (item.type === 'group' || item.type === 'dropdown') {
                // Recursively handle nested groups or dropdowns
                this.createToolbarItem(item, menu);
            }
        });

        document.body.appendChild(menu); // Append to body for absolute positioning
        return menu;
    }

    public show() {
        if (!this.isVisible) {
            this.positionDropdown();
            this.dropdownMenu.style.display = 'flex';
            this.dropdownMenu.style.opacity = '1';
            this.isVisible = true;
        }
        this.dropdownMenu.addEventListener('mouseleave', this.startHideTimer.bind(this));
        this.dropdownMenu.addEventListener('mouseenter', this.clearHideTimer.bind(this));
    }

    private positionDropdown() {
        if (!this.isVisible) {
            const buttonRect = this.dropdownButton.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Store initial position for consistent positioning
            this.dropdownMenu.style.top = `${buttonRect.bottom + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-y-offset'))}px`;
            this.dropdownMenu.style.left = `${buttonRect.left + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-x-offset'))}px`;

            // Adjust if dropdown goes off-screen
            if (buttonRect.left + this.dropdownMenu.offsetWidth > windowWidth) {
                this.dropdownMenu.style.left = `${windowWidth - this.dropdownMenu.offsetWidth - parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue('--dropdown-x-offset'))}px`;
            }
        }
    }

    private startHideTimer() {
        this.hideTimeout = window.setTimeout(() => {
            this.hideDropdown();
        }, 500);
    }

    private clearHideTimer() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }

    private hideDropdown() {
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