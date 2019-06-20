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


const DirectoryDE = require('./lib/dirents/directory.direntry');
const FileDE = require('./lib/dirents/file.direntry');
const AppConfig = require('./lib/appConfig.js');

/** // TODO: create function that will accept the top dir and create it like the rest */
/** // TODO: normalise TopDirentObj to have name like the rest of them */
/** // TODO: change oneIteration fn so it does not alter state. and only has one return statement */



dirIterator();

function dirIterator(DirectoryEntryObject){
  /** // TODO: send files to FileDE()........ */
  let currentDirectory = new DirectoryDE(AppConfig._topDirObject);
  let previousDirectory = null;

  const _dirIterator = (currentDirectory, previousDirectory) => {
    if(currentDirectory.children.length > 0){
        currentDirectory.children.forEach((child, ii, currDirChildArr) => {
          dirIterator(child);
        });
        console.log(currentDirectory);
    }
  }


  _dirIterator(currentDirectory,previousDirectory);

}

function compareChildrenLenToDirentLen(currentParentChildLen, currentDirArrayLen) {
  // if children.length = direntArray.length, children have all been checked
  if(currentParentChildLen===currentDirArrayLen) return true;
  else return false;
}


function makeFileDE(nodeInput, tempPlainObjInput) {
  if(nodeInput.name.split('.')===2){tempPlainObj.fileType = name.split('.')[1];}
  else {  tempPlainObjInput.fileType = 'unknown';}
  return new FileDE(tempPlainObjInput);
}

function makeDirectoryDE(tempPlainObjInput){
  return new DirectoryDE(tempPlainObjInput);
}
