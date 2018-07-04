# dstillr
Remove spammy messages and accounts from your wallet on Steemit.com with dstillr, an extension for Google Chrome.

## Build
1. This repo includes the unpacked extension.  You should not need to build 
   unless you want to debug or change something.  If that's the case...
1. You'll need the dev dependencies so run `npm install`.
1. Use `npm run build` to transpile and minify changes in [src/*.js](src/)
   to [ext/*.min.js](ext/).  To transpile a more human readable 
   script for debugging you can use `npm run build-debug` instead.

## Installation — unpacked in developer mode
1. The the [/ext](ext/) folder contains the unpacked extension. Save the 
   contents of this folder locally to a place they will remain while in use.
1. From Chrome's menu select **More tools** > **Extensions** or browse to:
   `chrome://extensions`.
1. Enable **Developer mode** via the switch at upper-right.
1. Click on **Load unpacked**.
1. Select the local folder containing dstillr and click **OK**.
1. In Chrome you should see the dstillr icon ( ![](/ext/dstillr-2-16.png) ) in your browser toolbar.

## Installation — Chrome Web Store
If you only want to use the filter without hacking you can install directly from
the Chrome Web Store:

http://bit.ly/dstillr-chrome-ws

This way you will also get automatic updates.

## Usage
Click on the the dstillr icon ( ![](/ext/dstillr-2-16.png) ) in your browser toolbar.
Enter one account per line or separate multiple accounts with spaces. You can 
combine both methods of separating account names. 

![](/doc/img/usage-example.png)

When you visit any user's
wallet page (e.g `https://steemit.com/@someaccount/transfers`) on steemit.com 
all transactions from accounts on the block list will be suppressed.  The block
list is processed when the page loads. If you update the list refresh the page 
to see the new results.

## License
   Copyright 2018 Trevor D. Reid

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this work except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

## Notices
   **This project is not affiliated with nor endorsed by:** 
   
   Steemit.com; Steemit, Inc.; Google Chrome; Google LLC; Alphabet, Inc.
