import { getLogger } from "lib/utils/logging.js";
import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from "./ContentEntries.js";
import { NodeEntryCache } from "./NodeEntryCache.js";
import { BreakNode, GroupNode, NodeEntryRef, TextNode } from "./NodeEntries.js";

const { log, warn } = getLogger('nerUtils', { color: 'yellow', enabled: true });

function getParentPath(node, stopNode: Node | undefined, cache): Array<Node> {
    let lookupPath: Array<Node> = [];
    let currNode: Node | undefined = node;
    while (currNode) {
        //console.log(`c`, currNode, currNode.parentNode)
        lookupPath.push(currNode);
        if (currNode == cache.rootNER.node || currNode == stopNode) break; // stop at root node
        currNode = currNode.parentNode as Node;
    }
    return lookupPath;
}

// Find's the given node in the cache tree, if it exists, starting from the parent node if given.
function findNode(node: Node, parent: NodeEntryRef | undefined, cache): NodeEntryRef | undefined {
    if (!node) throw "No node given to findNode()";
    if (!cache.rootNER?.node) throw "No rootNER found on NodeEntryCache. Did you forget to call hydrateContent()?";
    if (cache.rootNER.node == node) return cache.rootNER;
    if (cache.lastNER?.node == node) {
        return cache.lastNER;
    }

    // Create path from node to rootNER node, then walk back through to find the target child NER
    let lookupPath: Array<Node> = nerUtils.getParentPath(node, parent?.node, cache);
    let currNER = parent || cache.rootNER;
    let currNode = lookupPath.pop(); // starts at root
    let nextNode: Node | undefined = lookupPath.pop();

    //log(`findNode`, node, lookupPath)
    while (currNode) {
        const isTarget = currNode == node; // true only when it starts at the target
        const isParent = nextNode == node;

        if (isTarget) {
            log(`isTarget`, currNode, nextNode);
            return currNER; // ?
        }

        // look if the node exists in this node's children, or continue on the path
        for (const c of currNER.children) {
            if (c.node == node) return c;
            if (c.node == nextNode) {
                currNER = c;
                break;
            }
        };

        // node not found in the children so it doesn't exist
        if (isParent) return undefined;

        currNode = nextNode;
        nextNode = lookupPath.pop();
    }

    return undefined;
}

// creates an NER with a dom node from the given entry, and adds it to the parent NER.
function createNodeFromEntry(entry: ContentEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache): NodeEntryRef {
    let ner;
    switch (entry.type) {
        case 'text':
            ner = TextNode.createNodeFromEntry(entry as TextEntry, parent, this);
            break;
        case 'group':
            ner = GroupNode.createNodeFromEntry(entry as GroupEntry, parent, this);
            break;
        case 'break':
            ner = BreakNode.createNodeFromEntry(entry as BreakEntry, parent, this);
            break;
        default:
            throw "Unsupported entry type: " + entry.type;
    }

    // add new node to parent NER tree and dom:
    if (ner) {
        if (parent.children) parent.children.push(ner);
        if (parent.node) parent.node.appendChild(ner.node);
    }

    return ner;
}


// Creates a new NER from the given dom node an the entry
function createNode(node: Node, parent: NodeEntryRef, cache: NodeEntryCache) {
    if (!parent.node) {
        throw "Error: No node found on parent NER to insert to.";
    }

    // TODO: need to instead convertNodeToNER(node) ... which creates NER train
    const entry = ContentEntries.convertNodeToEntry(node);
    //const entry = ContentEntries.convertNodeToNodeEntry(node);
    //const ner = createNerTreeFromNode(node);
    const ner = { node, entry, children: [], parent }; // entry will be created later

    const pos = Array.from(parent.node.childNodes).findIndex((n, i) => n === node);
    log(`INSERT at:`, pos, 'parent:', parent, 'node:', node, 'new ner:', ner);

    if (!parent.children) parent.children = [];
    parent.children.splice(pos, 0, ner);

    if (Array.isArray(entry.children)) {
        // and new child entries need to be added to this NER:
        //entry.children.forEach(c => createNode(
    }

    // we add first-level entries directly to cache.entries to retain the pure array for export
    if (parent == cache.rootNER) {
        cache.entries?.push(ner.entry);
    } else {
        if (parent.entry && !parent.entry.children) parent.entry.children = [];
        if (Array.isArray(parent.entry?.children)) {
            parent.entry?.children?.splice(pos, 0, entry);
        }
    } {
        return ner;
    }
}

// Updates the given NER references to a new entry.
function updateNode(ner, cache: NodeEntryCache) {
    // "convert" the node by creating a new entry and re-assigning the properties.
    const entry = ContentEntries.convertNodeToEntry(ner.node);

    if (!ner.entry) ner.entry = entry;
    else {
        ner.entry.type = entry.type;
        ner.entry.children = entry.children;
        ner.entry.attributes = entry.attributes;
    }

    log(`UPDATE node:`, ner);
    return ner;
}

// deletes the node and associated entry from the tree
function deleteNode(node, cache) {
    log(`deleteNode:`, node);
}

function clearCache(cache) {
    if (Array.isArray(cache.entries)) while (cache.entries.pop()) { };
    // clear last reference but be sure not to clear the root
    if (cache.lastNER != cache.rootNER) cache.lastNER = undefined;
    if (cache.rootNER) {
        cache.rootNER.children = [];
        if (cache.rootNER.entry?.children)
            if (Array.isArray(cache.rootNER.entry.children)) {
                while (cache.rootNER.entry.children.pop()) { };
            }
    }
}

export const nerUtils = {
    getParentPath,
    findNode,
    createNodeFromEntry,
    createNode,
    updateNode,
    deleteNode,
    clearCache
};
