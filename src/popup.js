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

/* global chrome */

/** 
 * When the icon's extension is clicked retrieve the dstillr 
 * blocked account list from storage if it exists. Display it 
 * on the popup user interface. Otherwise leave the textarea blank
 */
document.body.onload = function() {
  chrome.storage.sync.get('dstillr', function(items) {
    if (!chrome.runtime.error) {
      document.getElementById('text').value = items.dstillr || '';
    }
  });
};

/**
 * Save the dstillr block list and close the popup user
 * interface when the user clicks the 'Set Block List' 
 * button.
 */
document.getElementById('set').onclick = function() {
  var d = document.getElementById('text').value;
  chrome.storage.sync.set({ dstillr: d }, function() {
    if (chrome.runtime.error) {
      console.log('dstillr runtime error.');
    }
  });
  window.close();
};
