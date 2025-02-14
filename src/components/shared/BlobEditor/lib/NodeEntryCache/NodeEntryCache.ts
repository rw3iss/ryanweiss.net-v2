import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from 'components/shared/BlobEditor/lib/NodeEntryCache/ContentEntries';
import { nerUtils } from './nerUtils';
import { getLogger } from 'lib/utils/logging.js';
import { NER, NodeEntryRef } from './NodeEntries.js';

const { log, error } = getLogger('NodeEntryCache', { color: 'yellow', enabled: true });

export class NodeEntryCache {
    public entries: Array<ContentEntry> | undefined;
    public rootNER: NodeEntryRef | undefined;
    public lastNER: NodeEntryRef | undefined = undefined; // reference to last-edited node for faster/immdiate lookups

    // Creates elements from the given list of entries, and insert them into the node tree.
    public hydrateContent(entries: Array<ContentEntry>, node: Node) {
        this.entries = entries || [{
            type: 'break',
            children: []
        }];

        // create a root node to start
        this.rootNER = {
            node,
            entry: undefined,  // root has no entry
            parent: undefined, // root has no parent
            children: []
        };

        // create a root entry from the container (a group), and re-assign the entry children so we can pull for the entries dataset later.
        this.rootNER.entry = ContentEntries.convertNodeToEntry(node);
        this.rootNER.entry.children = this.entries;
        this.rootNER.entry.children.forEach(e => this.createNERFromEntry(e, this.rootNER)); 111

        log(`hydrated.`, entries, this.rootNER);
    }

    // From a given entry... creates the dom reference for it, and adds to the parent if given, or root.
    // If the entry has children... the child dom elements will also be created and added recursively.
    public createNERFromEntry(entry: ContentEntry, parent?: NodeEntryRef) {
        if (!this.rootNER) throw "rootNER has not been created. Create a root node or call hydrateContent first.";
        if (!parent) parent = this.rootNER; // default to rootNER
        // create the base node to start with
        const ner = nerUtils.createNERFromEntry(entry, parent, this);
        if (!ner?.node) throw "Node->entry node could not be created from type: " + entry.type;
        return ner;
    }

    // Locate an NER in the tree by a dom node reference.
    public findNER(node: Node, parent?): NodeEntryRef | undefined {
        return nerUtils.findNER(node, this, parent);;
    }

    // Locates and updates the NER for the node, of it exists, or inserts a new one.
    public updateOrInsert(node: Node): NodeEntryRef {
        if (!node.parentNode) throw "node.parentNode does not exist. Invalid node?"

        // if the update is on the root, the update is a removal of a previous element.
        const isRootNode = node == this.rootNER?.node;
        let parent = isRootNode ? this.rootNER : this.findNER(node.parentNode as Node);
        if (!parent && node.parentNode.parentNode) {
            parent = this.findNER(node.parentNode.parentNode as Node);
            console.log(`Looking for parent ancestor: `, parent, node.parentNode.parentNode)
        }
        let ner = isRootNode ? this.rootNER : this.findNER(node, parent);

        //if (ner) log(`found node`, isRootNode ? '[ROOT]' : '', node == this.lastNER?.node ? '[LAST]' : '', ner);
        //else log(`node not found. creating...`, node, 'parentNER:', parent);

        if (ner) nerUtils.updateNER(ner, this);
        else if (parent) ner = nerUtils.createNERFromNode(node, parent, this);
        else {
            // if parent wasn't found... its most likely a new text node on the initial blank content area.
            console.log(`Parent NER not found for node:`, node, node.parentNode, ner);
            throw "Parent NER not found for updateOrInsert."
        }

        return this.lastNER = ner;
    }

    // Finds the node in the tree and removes the entry from it, and the dom node as well.
    public deleteNER(node) {
        return nerUtils.deleteNER(node, this);
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

    public getEntries = () => {
        return this.entries;
    }

}
