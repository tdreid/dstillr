/* global MutationObserver */

deleteElements('');

function deleteElements(selector) {
  deleteThese(document.querySelectorAll(selector));

  var mo = new MutationObserver(mutations => {
    for (var i = 0; i < mutations.length; i++) {
      var nodes = mutations[i].addedNodes;
      for (var j = 0; j < nodes.length; j++) {
        var n = nodes[j];
        if (n.nodeType != 1) // operate on Node.ELEMENT_NODE only
          continue;
        deleteThese(n.matches(selector) ? [n] : n.querySelectorAll(selector));
      }
    }
  });
  mo.observe(document, { subtree: true, childList: true });
  document.addEventListener('DOMContentLoaded', function() {
    mo.disconnect();
  });

  function deleteThese(nodes) {
    [].forEach.call(nodes, function(node) {
      node.remove();
    });
  }
}
