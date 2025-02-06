import { ContentEntry } from 'components/shared/BlobEditor/ContentEntries';

export type NodeEntryRef = {
    node: Node;
    entry: ContentEntry;
    children?: Array<NodeEntryRef>;
}


/**
 * @description Maintains two dictionary trees, one with a reference of existing dom nodes to entries, and the other of just the entries.
 * When an update from a dom node is received, the reference is found and replaced in place, allowing the entry tree to be retrieved and serialized
 * without any further work.
 * @export
 * @class NodeEntryCache
 */
export class NodeEntryCache {
    // node tree that references each entry, allowing for quick lookup of relevant nodes->entries.
    public nodeTree: Array<NodeEntryRef> = [];

    // the actual entry tree (content)
    public entryTree: Array<ContentEntry> = [];

    private nodeEntryRefs: Array<NodeEntryRef> = [];
    private lastNodeEntry: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Return just the entries without the node references, so they can be saved as Blob content.
    public getEntries = () => this.entryTree; //odeEntryRefs.map(ner => ner.entry);

    // Find a NodeEntryRef whose node matches the given node.
    // TODO: find from parent stack...
    public findEntry = (node: Node): NodeEntryRef | undefined => this.nodeEntryRefs.find(n => n.node == node);

    // Change the given node's entry content and set last edited node.
    public update = (ner: NodeEntryRef, entry: ContentEntry) => {
        ner.entry = entry;
        this.lastNodeEntry = ner;
        console.log(`update`, ner)
    }

    // Append an entry to the list of cached nodes, and set last edited node.
    public add = (node, entry) => {
        const ner = { node, entry };
        this.nodeEntryRefs.push(ner);
        this.lastNodeEntry = ner;
        console.log(`add`, ner)
    }

    // Updates the given node with the new entry. Compares lastNodeEntry with current node to avoid lookup through all nodes.
    public updateOrAdd = (node: Node, entry: ContentEntry) => {
        let ner;
        if (this.lastNodeEntry && this.lastNodeEntry.node == node) ner = this.lastNodeEntry;
        if (ner) this.update(ner, entry);
        else this.add(node, entry);
    }
}