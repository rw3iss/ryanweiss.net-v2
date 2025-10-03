import * as jsondiffpatch from 'jsondiffpatch';
import { isValidEmail, isValidUrl } from '../../../lib/utils/StrUtils';

type JsonViewOptions = {
	expandAll?: boolean;
	expandObjs?: Array<string | RegExp>;
	useViewState?: boolean;
};

const DEFAULT_OPTIONS = () => ({
	expandAll: false,
	expandObjects: [],
	useViewState: true
});

export class EnhancedJsonView {
	private json: any;
	private parentContainer: HTMLElement;
	private options: JsonViewOptions;
	private viewStates = {}; // viewstate tree for retaining view during state updates

	constructor(json: any, parentContainer: HTMLElement, options?: JsonViewOptions) {
		this.json = json;
		this.parentContainer = parentContainer;
		this.options = Object.assign({}, DEFAULT_OPTIONS(), options || {});
		this.render();
	}

	private render(): void {
		this.parentContainer.innerHTML = ''; // Clear existing content
		const rootNode = this.drawJsonNode(this.json);
		this.parentContainer.classList.add('json-view');
		this.parentContainer.appendChild(rootNode);
	}

	private toggleSection(childNode, keyPath, toggleButton): void {
		const isCollapsed = childNode.classList.contains('collapsed');
		childNode.classList.toggle('collapsed', !isCollapsed);
		this.viewStates[keyPath] = !isCollapsed;
		toggleButton.textContent = isCollapsed ? '[-]' : '[+]';
	}

	// only redraws changed nodes
	private drawJsonNode(jsonObj: any, currPath: string = ''): HTMLElement {
		const nodeContainer = document.createElement('div');
		nodeContainer.classList.add('json-node');

		const propertiesContainer = document.createElement('div');
		propertiesContainer.classList.add('json-properties');

		for (const key in jsonObj) {
			if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
				const keyPath = `${currPath}${key}`;
				const propertyRow = document.createElement('div');
				propertyRow.classList.add('json-property');
				propertyRow.setAttribute('data-path', keyPath);

				const label = document.createElement('span');
				label.classList.add('json-key');
				label.textContent = key + ': ';

				const valueContainer = document.createElement('div');
				valueContainer.classList.add('json-value');

				const value = jsonObj[key];
				const isObject = typeof value === 'object' && value !== null;
				const isArray = Array.isArray(value);
				//console.log(`value:`, value, 'obj?', isObject, 'array?', isArray);

				if (value instanceof Date) {
					valueContainer.textContent = value.toLocaleDateString();
				} else if (isObject) {
					propertyRow.classList.add('object');

					if (isArray) label.textContent = `${key} (${value.length})`;
					else label.textContent = key;

					const hasChildren = isArray && value.length > 0 ? true : Object.keys(value).length > 0;
					const toggleButton = document.createElement('button');
					toggleButton.classList.add('json-toggle');

					// Recursive call to render child object
					const childNode = this.drawJsonNode(value, keyPath + '/');
					//console.log(`KP`, keyPath)

					if (this.options.expandAll) {
						toggleButton.textContent = '[-]';
					} else {
						let expand = false;
						// expand empty objects by default:
						if (isArray && hasChildren) {
							//console.log(`no children`, keyPath)
							expand = true;
						} else {
							this.options.expandObjs?.forEach((e) => {
								if (new RegExp(e).test(keyPath)) expand = true;
							});
						}

						// if a viewstate exists use that always:
						if (this.options.useViewState) {
							if (typeof this.viewStates[keyPath] != 'undefined') expand = !this.viewStates[keyPath];
						}

						if (expand) {
							toggleButton.textContent = '[-]';
						} else {
							toggleButton.textContent = '[+]';
							childNode.classList.add('collapsed'); // Start collapsed
						}
					}

					// Toggle function for expanding/collapsing
					// toggleButton.onclick = () => {
					// 	this.toggleSection(childNode, keyPath, toggleButton);
					// };

					label.onclick = () => {
						this.toggleSection(childNode, keyPath, toggleButton);
					};

					label.appendChild(toggleButton);

					//propertyRow.appendChild(toggleButton);
					valueContainer.appendChild(childNode);
				} else {
					// todo: if link, render a link...
					if (key == 'image') {
						valueContainer.classList.add('image');
						valueContainer.innerHTML = `<a target="_blank" href="${value}"><img src="${value}"/></a>`;
					} else if (isValidEmail(value)) {
						valueContainer.classList.add('email');
						valueContainer.innerHTML = `<a href="mailto:r${value}">${value}</a>`;
					} else if (isValidUrl(value)) {
						valueContainer.classList.add('link');
						valueContainer.innerHTML = `<a href="${value}">${value}</a>`;
					} else {
						valueContainer.textContent = String(value);
					}
				}

				if (key != 'image') propertyRow.appendChild(label);
				propertyRow.appendChild(valueContainer);
				propertiesContainer.appendChild(propertyRow);
			}
		}

		nodeContainer.appendChild(propertiesContainer);
		return nodeContainer;
	}

	public updateJson(newJson: any): void {
		const delta = jsondiffpatch.diff(this.json, newJson);
		//console.log(`json delta`, delta)
		jsondiffpatch.patch(this.json, delta);
		//this.json = newJson;
		// todo: only render changed nodes... how? use data-path="" for each node?
		// ... could keep track of each path in a viewstate... during render... restore viewstate...

		this.render();
	}
}
