Edit flow:


On hydrate:
NodeEntryCache.createNERFromEntry(e, this.rootNER)              // create an NER without a beginning node.


On key char press:

NodeEntryCache.applyChange(node):
    NodeEntryCache.updateOrInsert(node):
        nerUtils.findNER(node):
            path = nerUtils.getParentPath(node, parentNER)
        nerUtils.updateNER(ner):
            entry = ContentEntries.convertNodeToEntry(node)
        nerUtils.createNERFromNode(node, parent):                       // create an NER with a beginning node...
            entry = ContentEntries.convertNodeToEntry(node)
            ner = createNERFromNode(node, entry, parent, cache)