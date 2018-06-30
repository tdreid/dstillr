/* global chrome MutationObserver */

chrome.storage.sync.get(['dstillr'], r => {
  distillTargets('.TransferHistoryRow__text', r.dstillr.split(/\s/));
});

function distillTargets(selector, names = []) {
  deleteBlacklistedTargets(document.querySelectorAll(selector), names);

  const mo = new MutationObserver(mutations => {
    for (let i = 0; i < mutations.length; i++) {
      let nodes = mutations[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        let n = nodes[j];
        if (n.nodeType != 1)
          // operate on Node.ELEMENT_NODE only
          continue;
        deleteBlacklistedTargets(
          n.matches(selector) ? [n] : n.querySelectorAll(selector),
          names
        );
      }
    }
  });

  mo.observe(document, { subtree: true, childList: true });
  document.addEventListener('DOMContentLoaded', function() {
    mo.disconnect();
  });

  function deleteBlacklistedTargets(nodes, names = []) {
    [].forEach.call(nodes, function(node) {
      names.forEach(name => {
        if (node.querySelector(`[href='/@${name}']`)) {
          node.parentNode.remove();
        }
      });
    });
  }
}
