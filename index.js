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
/**
  * { Native Node Modules }
  * - anticipating only needing [fs, path]
  */
// module.exports = require('./lib/');

const fileFinder = require('./lib/fileRetrieval');
const DirectoryDE = require('./lib/dirents/directory.direntry');
const FileDE = require('./lib/dirents/file.direntry');

const AppState = {
  currentParent: null
}

const arrayFromFileFinderLibrary = fileFinder.readCurrentDirectoryReturnAllDirEnts ();
/** @cheatsheet {parent, name, level, levelId} */
// AppState.currentParent = new DirectoryDE( 'coolFolder',null, 0,0);
AppState.asdf = new DirectoryDE('noFolder', 'beyonce',4,5)
console.log(AppState);

// arrayFromFileFinderLibrary.forEach((dirEntry, ii, origArr) => {
//   /** @param sending {Array | fs.Dirent }
//     * @returns {}
//     */
// });
