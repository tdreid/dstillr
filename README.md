# dstillr
Remove spammy messages and accounts from your wallet on Steemit.com with dstillr, an extension for Google Chrome.

## Build
1. This repo includes the unpacked extension.  You should not need to build 
   unless you want to debug or change something.  If that's the case...
1. You'll need the dev dependencies so run `npm install`.
1. Use `npm run build` to transpile and minify changes in [src/*.js](src/)
   to [ext/*.min.js](ext/).  To transpile a more human readable 
   script for debugging you can use `npm run build-debug` instead.

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
   - This project is not affiliated with nor endorsed by: Steemit.com; Steemit, Inc.
   - This project is not affiliated with nor endorsed by: Google Chrome; Google LLC; Alphabet, Inc.
