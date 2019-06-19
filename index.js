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
 * @version 0.0.4 - separate into a proper library
 */
'use strict';

const AppState = require('./lib/appstate.js');
const Looper = require('./lib/looper');

const arrayFromFileFinderLibrary = Looper.loopDirentsArray();


Looper.oneIteration(arrayFromFileFinderLibrary,AppState);
