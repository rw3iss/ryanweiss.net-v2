import { getLogger } from "lib/utils/logging.js";
import { BreakEntry, ContentEntries, ContentEntry, GroupEntry, TextEntry } from "./ContentEntries.js";
import { NodeEntryCache } from "./NodeEntryCache.js";
import { BreakNode, GroupNode, NER, NodeEntryRef, TextNode } from "./NodeEntries.js";

const { log, warn } = getLogger('nerUtils', { color: 'yellow', enabled: true });

// Returns a top-down node array path from the root or stop node to the given node using the node parents.
function getParentPath(node, stopNode: Node | undefined, cache: NodeEntryCache): Array<Node> {
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

// Find's the given node in the tree, if it exists, starting from the parent node if given.
function findNER(node: Node, cache: NodeEntryCache, parent?: NodeEntryRef | undefined): NodeEntryRef | undefined {
    if (!node) throw "No node given to findNode()";
    if (!cache.rootNER?.node) throw "No rootNER found on NodeEntryCache. Did you forget to call hydrateContent()?";

    // Check if the node is "cached", ie. it was the last edited node or its parent.
    if (cache.lastNER?.node == node) return cache.lastNER;
    if (cache.lastNER?.parent?.node == node) return cache.lastNER.parent;
    if (cache.rootNER.node == node) return cache.rootNER;

    // Create dom path from node to the root (or stop) node, then walk back down to find the target NER
    let lookupPath: Array<Node> = nerUtils.getParentPath(node, parent?.node, cache);
    let currNER = parent || cache.rootNER;
    let currNode = lookupPath.pop(); // start at root or stop node
    let nextNode: Node | undefined = lookupPath.pop(); // check if next (child) matches, or if current is the parent.

    //log(`findNode`, node, lookupPath)
    while (currNode) {
        const isTarget = currNode == node; // true only when it starts at the target
        const isParent = nextNode == node;

        if (isTarget) {
            warn(`IS TARGET?`, currNode, nextNode);
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

        // NER doesn't exist in the children.
        if (isParent) return undefined;

        currNode = nextNode;
        nextNode = lookupPath.pop();
    }

    return undefined;
}


// Creates an NER with a new dom node from the given entry, and adds it to the parent NER, at insertPos if given.
function createNERFromEntry(entry: ContentEntry, parent: NodeEntryRef, nodeCache: NodeEntryCache, insertPos?: number): NodeEntryRef {
    if (!entry) throw "No entry given to createNERFromEntry";
    if (!parent) throw "No parent given to createNERFromEntry";

    let ner;
    switch (entry.type) {
        case 'text':
            console.log(`creating text NER.`)
            ner = TextNode.createNERFromEntry(entry as TextEntry, parent, this);
            break;
        case 'group':
            console.log(`creating group NER.`)
            ner = GroupNode.createNERFromEntry(entry as GroupEntry, parent, this);
            break;
        case 'break':
            console.log(`creating break NER.`)
            ner = BreakNode.createNERFromEntry(entry as BreakEntry, parent, this);
            break;
        default:
            break
    }
    if (!ner) throw "Error: Could not create NER from entry type: " + entry.type;

    //log(`createNERFromEntry`, ner, insertPos);//, parent.node.childNodes);

    // add new node to parent NER tree and dom:
    // todo: add the node to the parent in its position of the new node
    if (insertPos) {
        // add to parent NER tree
        parent.children.splice(insertPos, 0, ner);

        // add to parent dom tree:
        const childNodes = Array.from(parent.node.childNodes);
        if (!childNodes.length) parent.node.appendChild(ner.node); // no other children, just append
        else {
            // insert before others if pos=0, or after its previous node
            if (insertPos == 0) parent.node.insertBefore(ner.node, parent.node.firstChild);
            else {
                const prevNode = childNodes[insertPos - 1];
                if (!prevNode) {
                    console.log(`No previous node?`, insertPos, childNodes, parent)
                    throw "No prevNode found at pos: " + (insertPos - 1);
                }
                console.log(`inserting node after:`, prevNode, 'new node:', ner.node, 'at:', insertPos)
                prevNode.after(ner.node);
            }
        }
    } else {
        parent.children.push(ner);
        parent.node.appendChild(ner.node);
    }

    //log(`${entry.type} NER result:`, entry, ner);

    return ner;
}

// creates a new NER subtree from an existing node and entry, adding it to the parent.
function createNERFromNodeEntry(node: Node, entry: ContentEntry, parent: NodeEntryRef) {
    const ner: NodeEntryRef = NER(node, entry, [], parent);
    if (Array.isArray(entry.children)) {
        entry.children.forEach((childEntry, i) => {
            const childNode = node.childNodes[i];
            //console.log(`dom child match?`, i, childEntry, childNode);
            createNERFromNodeEntry(childNode, childEntry, ner);
            //const childNer = { node: childNode, entry: childEntry, children: [], parent };
            //createNERFromNode(childNode, childEntry, childNer);
        });
    }
    // add the ner to the parent:
    parent.children.push(ner);
    return ner;
}

// Creates and insert a new entry and NER from the given dom node.
function createNERFromNode(node: Node, parent: NodeEntryRef, cache: NodeEntryCache): NodeEntryRef {
    if (!parent?.node) throw "Error: No node found on parent NER to insert to.";
    const entry = ContentEntries.convertNodeToEntry(node);
    const ner = createNERFromNodeEntry(node, entry, parent);

    // add the new entry to the parent entries
    if (Array.isArray(parent.entry?.children)) {
        // todo: add in position
        const pos = Array.from(parent.node.childNodes).findIndex(c => c == node);
        console.log(`Inserting entry into parent at POS:`, pos + 1);
        parent.entry.children.splice(pos + 1, 0, entry);
    }
    // // the node already existed so we assume we do not need to add to the parent dom again. todo?
    log(`NER created:`, ner);
    return ner;
}

function createNERAfterNode(node: Node, entry: ContentEntry, parent: NodeEntryRef, cache: NodeEntryCache): NodeEntryRef {
    // create a new node after node... create ner...
    // find position of the node in the parent:
    const pos = Array.from(parent.node.childNodes).findIndex(n => n == node);
    return createNERFromEntry(entry, parent, cache, pos + 1); // insert after
}



// Updates the given NER references to a new entry.
function updateNER(ner, cache: NodeEntryCache) {
    //const prevChildren = ner.children;

    // "convert" the node by creating a new entry and re-assigning the properties.
    //const newEntry = ContentEntries.convertNodeToEntry(ner.node);

    // the node changed... either it was a text node (a simple change),
    // or a node was added or removed... in which case we just reconcile the children.

    if (ner.node.nodeType == Node.TEXT_NODE) {
        // just update the text
        //console.log(`updating text NER...`)
        // updateEntry(ner.entry, ner.node); // update the entry by type...
        ner.entry.children = ner.node.textContent;
    } else {
        // reconcile the node children
        //console.log(`syncing group node children...`, ner)
        reconcileNodeChildren(ner, cache);
        //updateEntry(ner.entry, ner.node);
    }

    // if (!ner.entry) ner.entry = newEntry;
    // else {
    //     ner.entry.type = newEntry.type;
    //     ner.entry.children = newEntry.children;
    //     ner.entry.attributes = newEntry.attributes;
    // }

    log(`UPDATE node finished:`, ner);//, prevChildren);
    return ner;
}


// function insertNodeAfter(node: Node, entry: ContentEntry
// Goes through the dom childNodes of the given NER node and adds or removes child NERs as needed.
function reconcileNodeChildren(ner: NodeEntryRef, nodeCache: NodeEntryCache) {
    //console.log(`reconcile children`, ner)
    if (ner.node.nodeType != Node.TEXT_NODE) {
        const nodeChildren = Array.from(ner.node.childNodes);

        // now through child NER's and remove those with no-longer-existing nodes
        let noMoreChanges = false;
        while (!noMoreChanges) {
            noMoreChanges = true;
            ner.children.forEach((c, i) => {
                const exists = nodeChildren.find(nc => nc == c.node);
                if (!exists) {
                    console.log(`DANGLING NER, REMOVING...`, c, i);
                    if (Array.isArray(ner.entry?.children)) ner.entry.children.splice(i, 1);
                    ner.children.splice(i, 1);
                    // need to remove from entries as well...
                    noMoreChanges = false;
                    //console.log(`Child NER removed from parent:`, ner);
                }
            });
        }

        // go through all dom nodes and add new NER's for non-existing:
        noMoreChanges = false;
        while (!noMoreChanges) {
            noMoreChanges = true;
            // keep re-getting child nodes so indexes stay upates
            let nodeChildren = Array.from(ner.node.childNodes);
            nodeChildren.forEach(nc => {
                // find ner in the children
                const exists = ner.children.find(c => c.node == nc);
                if (!exists) {
                    console.log(`CREATING NER CHILD for node:`, nc)
                    let childNer = createNERFromNode(nc, ner, nodeCache);
                    noMoreChanges = false;
                    //console.log(`created new child:`, childNer);
                }
            });
        }

    }
}


// deletes the node and associated entry from the tree
function deleteNER(node, cache) {
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
    findNER,
    createNERFromEntry,
    createNERFromNode,
    createNERAfterNode,
    updateNER,
    deleteNER,
    clearCache
};
