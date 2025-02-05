import { ContentEntry, NodeEntryRef } from 'components/shared/BlobEditor/ContentEntries';
// simple link of DOM nodes -to- ContentEntry entries.
export class NodeEntryCache {
    private nodeEntryRefs: Array<NodeEntryRef> = [];
    private lastNodeEntry: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Return just the entries without the node references, so they can be saved as Blob content.
    public getEntries = () => this.nodeEntryRefs.map(ner => ner.entry);

    // Find a NodeEntryRef whose node matches the given node.
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
