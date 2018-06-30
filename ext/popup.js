/* global chrome */

document.body.onload = function() {
  chrome.storage.sync.get("dstillr", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("data").innerText = items.dstillr;
    }
  });
};

document.getElementById("set").onclick = function() {
  var d = document.getElementById("text").value;
  chrome.storage.sync.set({ "dstillr" : d }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
};
