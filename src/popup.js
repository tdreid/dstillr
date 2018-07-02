/* global chrome */

document.body.onload = function() {
  chrome.storage.sync.get('dstillr', function(items) {
    if (!chrome.runtime.error) {
      document.getElementById('text').value = items.dstillr;
    }
  });
};

document.getElementById('set').onclick = function() {
  var d = document.getElementById('text').value;
  chrome.storage.sync.set({ dstillr: d }, function() {
    if (chrome.runtime.error) {
      console.log('dstillr runtime error.');
    }
  });
  window.close();
};
