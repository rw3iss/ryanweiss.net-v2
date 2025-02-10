import EventBus from "eventbusjs";
import { getLogger, LogModule } from "lib/utils/logging.js";

type LogEntry = {
    id: string;
    message: Array<any> | object | string;
    timestamp: Date;
}

type LogEvent = {
    namespace: string;
    args: Array<any>;
}

interface TabEntries {
    [namespace: string]: LogEntry[];
}

// Wrapping class to use the DebugPanel within the Logging framework.
export class DebugPanelLogModule implements LogModule {
    public name = "DebugPanel";
    public debugPanel: DebugPanel;

    constructor(opts: any = {}) {
        this.debugPanel = new DebugPanel(document.body);
        if (opts.show) this.debugPanel.show();
    }

    public onLog(log: LogEvent) {
        // tell the debug panel
        console.log(`onLog:`, log)
        this.debugPanel.addLog(log.namespace, log.args);
        //console.log(`onLog`, log);
    }
}

function renderLogEntry(message: any) {
    return Array.isArray(message) ?
        message.join(' ') :
        typeof message == 'object' ?
            JSON.stringify(message) :
            `${message}`;
}


export class DebugPanel {
    private container: HTMLElement;
    private tabContainer: HTMLElement;
    private contentContainer: HTMLElement;
    private tabEntries: TabEntries = {};
    private activeTab: string = "global";

    constructor(parent: HTMLElement) {
        this.container = this.createContainer();
        this.tabContainer = this.createTabContainer();
        this.contentContainer = this.createContentContainer();

        this.container.appendChild(this.tabContainer);
        this.container.appendChild(this.contentContainer);
        parent.appendChild(this.container);

        this.addTab("global");
        this.setupEventListeners();
    }

    private createContainer(): HTMLElement {
        const container = document.createElement("div");
        container.classList.add("debug-panel");
        return container;
    }

    private createTabContainer(): HTMLElement {
        const tabContainer = document.createElement("div");
        tabContainer.classList.add("debug-panel-tabs");
        return tabContainer;
    }

    private createContentContainer(): HTMLElement {
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("debug-panel-content");
        return contentContainer;
    }

    private setupEventListeners(): void {
        EventBus.addEventListener("log", (event: any) => {
            const { namespace, message } = event.target;
            this.addLog(namespace, message);
        });
    }

    private addTab(namespace: string): void {
        if (this.tabEntries[namespace]) return;

        this.tabEntries[namespace] = [];

        const tab = document.createElement("button");
        tab.classList.add("debug-tab");
        tab.textContent = namespace;
        tab.onclick = () => this.switchTab(namespace);
        this.tabContainer.appendChild(tab);

        const content = document.createElement("div");
        content.classList.add("debug-tab-content");
        content.dataset.namespace = namespace;
        this.contentContainer.appendChild(content);

        if (namespace === "global") {
            this.addClearButton(content, true);
        } else {
            this.addClearButton(content);
        }

        if (Object.keys(this.tabEntries).length === 1) {
            this.switchTab(namespace);
        }
    }

    private switchTab(namespace: string): void {
        this.activeTab = namespace;
        document
            .querySelectorAll(".debug-tab-content")
            .forEach((el) => (el as HTMLElement).style.display = "none");
        const activeContent = this.contentContainer.querySelector(
            `[data-namespace="${namespace}"]`
        ) as HTMLElement;
        if (activeContent) activeContent.style.display = "block";
    }

    private addClearButton(content: HTMLElement, isGlobal: boolean = false): void {
        const clearButton = document.createElement("button");
        clearButton.classList.add("debug-clear-button");
        clearButton.textContent = "Clear";
        clearButton.onclick = () => {
            if (isGlobal) {
                Object.keys(this.tabEntries).forEach((key) => {
                    this.tabEntries[key] = [];
                    const tabContent = this.contentContainer.querySelector(
                        `[data-namespace="${key}"]`
                    );
                    if (tabContent) tabContent.innerHTML = "";
                });
            } else {
                const namespace = content.dataset.namespace;
                if (namespace) {
                    this.tabEntries[namespace] = [];
                    content.innerHTML = "";
                }
            }
        };
        content.appendChild(clearButton);
    }

    private addLog(namespace: string, message: Array<any> | object | string): void {
        if (!this.tabEntries[namespace]) {
            this.addTab(namespace);
        }

        const logEntry: LogEntry = {
            id: `${namespace}-${Date.now()}-${Math.random()}`,
            message,
            timestamp: new Date(),
        };
        this.tabEntries[namespace].push(logEntry);

        const content = this.contentContainer.querySelector(
            `[data-namespace="${namespace}"]`
        );
        if (!content) return;

        const logElement = this.createLogElement(logEntry, namespace);
        content.appendChild(logElement);

        // add to global
        if (namespace != 'global') this.addLog('global', message);
    }


    private createLogElement(logEntry: LogEntry, namespace: string): HTMLElement {
        const logElement = document.createElement("div");
        logElement.classList.add("debug-log-entry");
        logElement.dataset.logId = logEntry.id;

        // Add text:
        const logText = document.createElement('div');
        logText.innerText = `[${logEntry.timestamp.toLocaleTimeString()}] ${renderLogEntry(logEntry.message)}`;
        logText.classList.add('debug-log-entry-text');

        // Add 'Copy' button
        const copyButton = document.createElement('button');
        copyButton.innerText = '📋';
        copyButton.classList.add('debug-copy-button');
        copyButton.onclick = () => navigator.clipboard.writeText(logText.innerHTML);

        // Add 'X' (delete) button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        deleteButton.classList.add('debug-delete-button');
        deleteButton.onclick = () => this.removeLogEntry(namespace, logEntry.id, logElement);

        logElement.appendChild(logText);
        logElement.appendChild(copyButton);
        logElement.appendChild(deleteButton);

        return logElement;
    }

    private removeLogEntry(namespace: string, logId: string, logElement: HTMLElement): void {
        this.tabEntries[namespace] = this.tabEntries[namespace].filter(
            (entry) => entry.id !== logId
        );
        logElement.remove();
    }

    public show(): void {
        console.log(`SHOW`)
        this.container.classList.add("visible");
    }

    public hide(): void {
        this.container.classList.remove("visible");
    }
}