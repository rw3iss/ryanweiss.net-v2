import { WEditor } from "../lib/WEditor.js";

export interface IPlugin {
    initialize(editor: WEditor, container: HTMLElement): void;
}