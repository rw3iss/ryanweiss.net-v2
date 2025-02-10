import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from 'components/shared/BlobEditor/lib/NodeEntryCache/ContentEntries';
import { nerUtils } from './nerUtils';
import { getLogger } from 'lib/utils/logging.js';
import { NER, NodeEntryRef } from './NodeEntries.js';

const { log, error } = getLogger('NodeEntryCache', { color: 'yellow', enabled: true });

export class NodeEntryCache {
    public entries: Array<ContentEntry> | undefined;
    public rootNER: NodeEntryRef | undefined;
    private lastNER: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Creates elements from the given list of entries, and insert them into the node tree.
    public hydrateContent(entries: Array<ContentEntry>, node: Node) {
        this.entries = entries || [];

        // create a root node to start
        this.rootNER = {
            node,
            entry: undefined,  // root has no entry
            parent: undefined, // root has no parent
            children: []
        };

        this.rootNER.entry = ContentEntries.convertNodeToEntry(node); // creates group entry for root
        this.entries.forEach(e => this.createNodeFromEntry(e, this.rootNER)); // convert entries to NER with new dom nodes

        //this.createNodeEntry(this.rootNER.entry, null)
        log(`hydrated.`, entries, this.rootNER);
    }

    // From a given entry... creates the dom reference for it, and adds to the parent if given, or root.
    // If the entry has children... the child dom elements will also be created and added recursively.
    public createNodeFromEntry(entry: ContentEntry, parent?: NodeEntryRef) {
        if (!this.rootNER) throw "rootNER has not been created. Create a root node or call hydrateContent first.";
        if (!parent) parent = this.rootNER; // default to rootNER

        // create the base node to start with
        let ner: NodeEntryRef = NER(undefined, entry, [], parent);
        if (entry) ner = nerUtils.createNodeFromEntry(entry, parent, this);

        if (!ner?.node) throw "Node->entry node could not be created from type: " + entry.type;
        return ner;
    }

    // Locate an NER in the tree by a dom node reference.
    public findNode(node: Node, parent?): NodeEntryRef | undefined {
        return nerUtils.findNode(node, parent, this);
    }

    // Locates and updates the NER for the node, of it exists, or inserts a new one.
    public updateOrInsert(node: Node): NodeEntryRef {
        console.log(`updateOrInsert`, node);
        if (!node.parentNode) throw "parentNode does not exist."

        // todo: the node contents should be replaced with new entry...

        // if the node is the root... it should... always insert?
        const isRoot = node == this.rootNER?.node;

        let parent = isRoot ? this.rootNER : this.findNode(node.parentNode as Node);
        let ner = isRoot ? this.rootNER : this.findNode(node, parent);
        log(`found node?`, ner, '. parent:', parent, '. target is root?', isRoot);
        if (ner) nerUtils.updateNode(ner, this);
        else if (parent) ner = nerUtils.createNode(node, parent, this);
        else throw "Parent not found for updateOrInsert."

        this.lastNER = ner;
        return ner;
    }

    // Finds the node in the tree and removes the entry from it, and the dom node as well.
    public deleteNode(node) {
        return nerUtils.deleteNode(node, this);
    }

    // Called when a change is detected on the node. Finds the given node in the tree and updates it's entry.
    // If the node does not exist the NER is inserted in its relative dom position.
    public applyChange(node: Node) {
        //log(`applyChange`, 'isRoot?', node == this.rootNER?.node, 'node:', node, 'entry:', entry)
        try {
            // todo: move this to WEditor?
            // if its a text entry, check the parent... if it only has a break, remove the break.
            //console.log(`converted:`, entry);
            return this.lastNER = this.updateOrInsert(node);
        } catch (e) {
            log(`Exception in applyChange():`, e);
        }
    }

    public clear = () => {
        nerUtils.clearCache(this);
    }

}
