/*
   Copyright 2018 Trevor D. Reid

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/* global chrome MutationObserver */

/** 
 * Retrieve the dtillr list of blocked accounts from storage
 * split it into an array of account names and pass to the
 * main function to process all transaction history rows on
 * the wallet page.
 */
chrome.storage.sync.get(['dstillr'], r => {
  distillTargets('.TransferHistoryRow__text', r.dstillr.split(/\s/));
});

/**
 * Remove any block listed nodes already attached to the DOM. Then
 * attach a mutation observer to delete any further block listed
 * nodes added to the DOM.
 */
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

  /**
   * Remove nodes from a nodelist that contain 
   * any child element with an href attribute
   * referring to a block listed account name
   */
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
