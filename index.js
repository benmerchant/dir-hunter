'use strict';
/**
  * @filename '/noitunes/index.js'
  * @fileoverview crawl through a directory and its 287 sub-directories to find all 2,277 files, move them to a more easily accessible location, and pretty print the tree structure
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  */
const DirectoryDE = require('./lib/dirents/directory.direntry'),
      AppConfig = require('./lib/appConfig.js');

new DirectoryDE(AppConfig._topDirObject);
