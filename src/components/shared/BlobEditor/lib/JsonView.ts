import safeStringify from 'safe-stringify';

type JsonViewOptions = {
    expandAll?: boolean;
    expandObjs?: Array<string | RegExp>;
}

const DEFAULT_OPTIONS = () => ({
    expandAll: false,
    expandObjects: []
});

export class JsonView {
    private json: any;
    private parentContainer: HTMLElement;
    private options: JsonViewOptions;

    constructor(json: any, parentContainer: HTMLElement, options?: JsonViewOptions) {
        this.json = json;
        this.parentContainer = parentContainer;
        this.options = options || DEFAULT_OPTIONS();
        this.render();
    }

    private render(): void {
        this.parentContainer.innerHTML = ""; // Clear existing content
        const rootNode = this.drawJsonNode(this.json);
        this.parentContainer.appendChild(rootNode);
    }

    private drawJsonNode(jsonObj: any, currPath: string = ""): HTMLElement {
        const nodeContainer = document.createElement("div");
        nodeContainer.classList.add("json-node");

        const propertiesContainer = document.createElement("div");
        propertiesContainer.classList.add("json-properties");

        for (const key in jsonObj) {
            if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
                const keyPath = `${currPath}${key}`;
                const propertyRow = document.createElement("div");
                propertyRow.classList.add("json-property");

                const label = document.createElement("span");
                label.classList.add("json-key");
                label.textContent = key + ": ";

                const valueContainer = document.createElement("div");
                valueContainer.classList.add("json-value");

                const value = jsonObj[key];
                const isObject = typeof value === "object" && value !== null;
                const isArray = Array.isArray(value);
                //console.log(`value:`, value, 'obj?', isObject, 'array?', isArray);

                if (isObject) {
                    if (isArray) label.textContent = `${key} (${value.length})`;
                    else label.textContent = key;
                    const hasChildren = (isArray && value.length > 0) ? true : Object.keys(value).length > 0;
                    propertyRow.classList.add('object');
                    // Create expandable/collapsible toggle button
                    const toggleButton = document.createElement("button");
                    toggleButton.classList.add("json-toggle");

                    // Recursive call to render child object
                    const childNode = this.drawJsonNode(value, keyPath + "/");
                    //console.log(`KP`, keyPath)

                    if (this.options.expandAll) {
                        toggleButton.textContent = "[-]";
                    } else {
                        let expand = false;
                        // expand empty objects by default:
                        if (isArray && hasChildren) {
                            //console.log(`no children`, keyPath)
                            expand = true;
                        }
                        else {
                            this.options.expandObjs?.forEach(e => {
                                if (new RegExp(e).test(keyPath)) expand = true;
                            });
                        }
                        if (expand) {
                            toggleButton.textContent = "[-]";
                        } else {
                            toggleButton.textContent = "[+]";
                            childNode.classList.add("collapsed"); // Start collapsed
                        }
                    }

                    // Toggle function for expanding/collapsing
                    toggleButton.onclick = () => {
                        const isCollapsed = childNode.classList.contains("collapsed");
                        childNode.classList.toggle("collapsed", !isCollapsed);
                        toggleButton.textContent = isCollapsed ? "[-]" : "[+]";
                    };

                    propertyRow.appendChild(toggleButton);
                    valueContainer.appendChild(childNode);
                } else {
                    valueContainer.textContent = String(value);
                }

                propertyRow.appendChild(label);
                propertyRow.appendChild(valueContainer);
                propertiesContainer.appendChild(propertyRow);
            }
        }

        nodeContainer.appendChild(propertiesContainer);
        return nodeContainer;
    }

    public updateJson(newJson: any): void {
        this.json = newJson;
        this.render();
    }
}