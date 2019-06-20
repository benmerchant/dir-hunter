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

const FileFinder = require('./lib/fileRetrieval');
const DirectoryDE = require('./lib/dirents/directory.direntry');
const FileDE = require('./lib/dirents/file.direntry');
const AppConfig = require('./lib/appConfig.js');

/** // TODO: create function that will accept the top dir and create it like the rest */
/** // TODO: normalise TopDirentObj to have name like the rest of them */
/** // TODO: change oneIteration fn so it does not alter state. and only has one return statement */


const TopDirectoryDE = new DirectoryDE(AppConfig.TopDirObject);
console.log(TopDirectoryDE);

// 1. get fs.Dirent array
/** @type {Array  fs.Dirent } call fileFinder  */
const arrayFromFileFinderLibrary = FileFinder.readCurrentDirectoryReturnAllDirEnts();
// 2. call the dir array looper
oneIteration(arrayFromFileFinderLibrary,AppConfig.TopDirObject);


function oneIteration(currentDirEntries, currentAppState) {
  currentDirEntries.forEach((node, ii, origArray) => {
    let parentLvl = currentAppState.currentParent.level;
    let parentName = currentAppState.currentParent.name.split('\\').pop();
    let tempPlainObj = {
      name: node.name,
      parent: currentAppState.currentParent.name.split('\\').pop(),
      level: parentLvl + 1,
      levelId: ii
    }
    /** // TODO: change this if/else to TRY CATCH */
    // had to structure as such due to lexical scoping wanted the '...children.push() to be outside of if/else'
    let tempDEobj = {};
    if (node.isFile()) { tempDEobj.pushThis = makeFileDE(node,tempPlainObj);}

    // 3. run looper.oneIteration() until it finds a directory
    else if (node.isDirectory()) {
      // create a DirectoryDE object
      tempDEobj.pushThis = makeDirectoryDE(tempPlainObj);

    }


    else {throw 'no clue how you got here, must have weird directory entries';}
    /**
     * add this loops (File|Directory)DE object to the currentParent's children array
     */
    currentAppState.currentParent.children.push(tempDEobj.pushThis);
    /**
     * compare the length of the currentParent's children array to the length of the current Dirent array
     * if equal, mark the current parents 'childCheck' flag to true. else mark it false (it defaults to false)
     */
    currentAppState.currentParent.childCheck = compareChildrenLenToDirentLen(currentAppState.currentParent.children.length, currentDirEntries.length);
  });

};

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
