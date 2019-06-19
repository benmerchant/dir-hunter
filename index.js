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
/** @cheatsheet {Object}  :parent{String}, name{String}, level{Int}, {int} levelId} */

const TopDirObject = { name: __dirname, parent: null };



AppState.currentParent = new DirectoryDE(TopDirObject);




arrayFromFileFinderLibrary.forEach((node, ii, origArray) => {
  let parentLvl = AppState.currentParent.level;
  let parentName = AppState.currentParent.name.split('\\').pop();
  let tempPlainObj = {
    name: node.name,
    parent: AppState.currentParent.name.split('\\').pop(),
    level: parentLvl + 1,
    levelId: ii
  }

  if (node.isFile()) {
    if(node.name.split('.')===2){tempPlainObj.fileType = name.split('.')[1];}
    else {  tempPlainObj.fileType = 'unknown';}
    AppState.currentParent.children.push(new FileDE(tempPlainObj));
  }
  else if (node.isDirectory()) {
    AppState.currentParent.children.push(new DirectoryDE(tempPlainObj));
  }

  else {throw 'no clue how you got here, must have weird directory entries';}

  // AppState.currentParent.children.push(TempDirent);
});

console.log(AppState.currentParent);
