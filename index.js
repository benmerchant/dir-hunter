/**
 * @filename '/noitunes/index.js'
 * @fileoverview crawl through a directory and its 287 sub-directories
 to find all 2,277 files,
 move them to a more easily accessible location,
 and pretty print the tree structure
 * @author Ben Merchant <https://benmerchant.dev>
 * @licence MIT
 * @copyright 2019
 *
 * @version 0.0.5 - restructure for recursion
 */
'use strict';

const AppState = require('./lib/appstate.js');
const Looper = require('./lib/looper');

// 1. get dir array
const arrayFromFileFinderLibrary = Looper.loopDirentsArray();
// 2. call the dir array looper
Looper.oneIteration(arrayFromFileFinderLibrary,AppState);
console.log(AppState);
