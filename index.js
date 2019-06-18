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

const AppState = { currentParent: null };

const arrayFromFileFinderLibrary = fileFinder.readCurrentDirectoryReturnAllDirEnts ();
/** @cheatsheet {parent, name, level, levelId} */

const TopDirObject = { name: __dirname, parent: null };



AppState.currentParent = new DirectoryDE(TopDirObject);

arrayFromFileFinderLibrary.forEach((node, ii, origArray) => {
  let parentLvl = AppState.currentParent.level;
  let tempDirentObj = {
    name: node.name,
    parent: AppState.currentParent.name.split('\\').pop(),
    level: parentLvl + 1,
    levelId: ii
  }
  if (node.isFile()) {
    tempDirentObj.entryType = 'file';
  } else if (node.isDirectory()) {
    tempDirentObj.entryType = 'directory';
  } else {
    throw 'no clue how you got here, must have weird directory entries';
  }
  AppState.currentParent.children.push(tempDirentObj);
});

console.log(AppState.currentParent);
