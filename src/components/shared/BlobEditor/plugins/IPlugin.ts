import { WEditor } from "../WEditor.ts";

export interface IPlugin {
    initialize(editor: WEditor, container: HTMLElement): IPlugin;
}
