import { getLogger } from "lib/utils/logging.js";
import { ContentEntry } from "../ContentEntries.js";
import { NodeEntryCache, NodeEntryRef } from "./NodeEntryCache.js";

const { log, warn } = getLogger('NER', { color: 'yellow', enabled: true });

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
        log(`Last:`, cache.lastNER);
        return cache.lastNER;
    }

    // Create path from node to rootNER node, then walk back through to find the target child NER
    let lookupPath: Array<Node> = nerUtils.getParentPath(node, parent?.node, cache);
    let currNER = parent || cache.rootNER;
    let currNode = lookupPath.pop(); // starts at root
    let nextNode: Node | undefined = lookupPath.pop();

    log(`findNode`, node, lookupPath)
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

// Sets the NER entry's contents to the new one, so initial reference is retained.
function updateNode(ner, entry, cache: NodeEntryCache) {
    if (!ner.entry) ner.entry = entry;
    else {
        ner.entry.type = entry.type;
        ner.entry.children = entry.children;
        ner.entry.attributes = entry.attributes;
    }
    log(`UPDATE node:`, ner);
    return ner;
}

// Finds the node's position in the parent's dom node and inserts a new NER in the tree there.
function insertNode(parent: NodeEntryRef, node: Node, entry: ContentEntry, cache: NodeEntryCache) {
    if (!parent.node) throw "Error: parent NER does not have a node for insertNode.";
    const pos = Array.from(parent.node.childNodes).findIndex((n, i) => n == node);
    const ner = { node, entry, children: [], parent }; // entry will be created later
    log(`INSERT at:`, pos, 'parent:', parent, 'new:', ner);
    if (!parent.children) parent.children = [];
    parent.children.splice(pos, 0, ner);
    if (Array.isArray(parent.entry?.children)) {
        parent.entry?.children?.splice(pos, 0, entry);
    }
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
    updateNode,
    insertNode,
    deleteNode,
    clearCache
};
