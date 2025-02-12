
# BUGS:

* createNER seems to be inserting in wrong position. (for break)
- Solution: Check insertPos.

* 'Shift+Enter' on a Text node inserts a new Break, but after typing the dom removes the break and replaces with a text node, however the Break entry+ner still exists and needs to be removed.
- Also reconcile children is called on the parent, checking all nodes... okay each enter? or otherwise... detect the enter, let the browser insert the new break and place the cursor, somehow cancel the update call... but then manually create the Break NER from the new break or cursor position/edit node.

* 'Backspace' on a blank node will delete it, but sees editing node as the previous sibling.
- Solutions:
    a) Capture backspace, manually delete the node if empty, and set focus to previous sibling.
- the content change event has inputType: "deleteContentBackward"...

* 'Enter' creates a new Group with a Break, but when user starts typing it inserts a new Text node, and removes the break dom node. It needs to also remove the NER.
- Solutions:
    a) When the new group is created from the new dom node, remove any internal <br> nodes first.
    b) Create custom Enter handler to create a new group manually, insert, and set the caret position.

* Pasting content on initial node fails to insert a break after, and styles become "stuck" on subsequent nodes.
- Solution: Should start with a group, or otherwise a default break, line a new group.

-------------

# TODO:
* Should try to handle 'down' (and up?) arrow to ensure the user can 'break' out of a previous group node (ie. pasted content).
- How: on down, see if you can check the cursor position is at the end of a parent, and try to break out. if no next exists, it should create one an move the cursor...