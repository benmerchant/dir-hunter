'use strict';
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
const DirectoryDE = require('./lib/dirents/directory.direntry');
// const FileDE = require('./lib/dirents/file.direntry');
const AppConfig = require('./lib/appConfig.js');

/** // TODO: create function that will accept the top dir and create it like the rest */
/** // TODO: normalise TopDirentObj to have name like the rest of them */
/** // TODO: change oneIteration fn so it does not alter state. and only has one return statement */
/** // TODO: send files to FileDE()........ */

/********* /MAIN/ *********/
// dirIterator();
/********* /MAIN/ *********/

// function dirIterator(){
  new DirectoryDE(AppConfig._topDirObject);
  // let previousDirectory = null;
  // let iiii = 0;
  /**
    * [describe this function]
    *
    * -@param {-DirectoryDE} -currentDirectory
    * -@param {-DirectoryDE} -previousDirectory
    *
    */
//   const _dirIterator = (currentDirectory, previousDirectory) => {
//     console.log('_dirIterator(breakpoint: 1)');
//     console.log(currentDirectory);
//     if(currentDirectory.childrenDirs.length > 0){
//       console.log('_dirIterator(breakpoint: 2)');
//         currentDirectory.childrenDirs.forEach((child, ii, currDirChildArr) => {
//           console.log(iiii);
//           iiii += 1;
//           _dirIterator(child);
//         });
//     }
//     console.log('_dirIterator(breakpoint: 3)');
//     console.log(currentDirectory);
//   }
//   _dirIterator(currentDirectory,previousDirectory);
// }
// function compareChildrenLenToDirentLen(currentParentChildLen, currentDirArrayLen) {
//   // if children.length = direntArray.length, children have all been checked
//   if(currentParentChildLen===currentDirArrayLen) return true;
//   else return false;
// }
//
//
// function makeFileDE(nodeInput, tempPlainObjInput) {
//   if(nodeInput.name.split('.')===2){tempPlainObj.fileType = name.split('.')[1];}
//   else {  tempPlainObjInput.fileType = 'unknown';}
//   return new FileDE(tempPlainObjInput);
// }
//
// function makeDirectoryDE(tempPlainObjInput){
//   return new DirectoryDE(tempPlainObjInput);
// }
