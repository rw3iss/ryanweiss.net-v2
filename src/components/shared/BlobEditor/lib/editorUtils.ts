const setCaretAfter = (node) => {
    if (window.getSelection) {
        var range = document.createRange()
        var sel = window.getSelection()

        if (sel) {
            let offset = 0;
            if (node.nodeType == Node.TEXT_NODE) {
                offset = node.nodeValue.length;
            } else {
                // somehow determine end/length of div...
                offset = 0;
            }
            range.setStart(node, offset);
            //range.setEnd(node, offset);
            range.collapse(false); // collapse to start

            sel.removeAllRanges()
            sel.addRange(range)
            console.log(`set caret`, node, offset, range);
        }
    }
}

module.exports = {
    setCaretAfter
}