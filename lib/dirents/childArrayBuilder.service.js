"use strict";
/**
  * @filename ./lib/childArrayBuilder.service.js
  * @fileoverview takes an array of Dirents from a directory and
  * returns an array of DirectoryDE & FileDE
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  * @version 0.0.5 - restructure for recursion
  * @api private
  */

/** @function returns {Array | IDirectoryEntry} arrayOfDirectoryEntries */
const fileFinder = require('../fileRetrieval');
const FileDE = require('./file.direntry'),
      DirectoryDE = require('./directory.direntry');

const childBuilder = {};

childBuilder.returnTheArray = (parentDEPath) => {
  const _childrensNameTypeArray =  _buildChildrensNameTypeArray(parentDEPath);
  return _segretageAndObjectifyTheChildren(_childrensNameTypeArray,parentDEPath);
}

/** segregate the children */
function _segretageAndObjectifyTheChildren(childrensNameTypeArray,parentDEPath){
  return childrensNameTypeArray.map((thisChildElement) => {
    if(thisChildElement.type === 'directory'){
      return new DirectoryDE({

      })
    } else if(thisChildElement.type === 'file') {
      /** @type {Object: name * fileType}  */
      const nameAndFileType = _getNameAndFileType(thisChildElement.name);
      return new FileDE({
        name: nameAndFileType.name,
        parent: parentDEPath,
        fileType: nameAndFileType.fileType
      })
    }
  });
}
/** make this function static*/
function _buildChildrensNameTypeArray(arrayOfDirents){
  return fileFinder.readCurrentDirectoryReturnAllDirEnts(arrayOfDirents).map((thisDirent) => {
    return {
      name: thisDirent.name,
      type: (thisDirent.isDirectory()) ? 'directory' : 'file'
    }
  });
}
/** */
function _getNameAndFileType(fullFileName){
  const nameAndFileTypeArray = fullFileName.split('.');
  return {
    name: nameAndFileTypeArray[0],
    fileType: nameAndFileTypeArray[1]
  }
}

module.exports = childBuilder;
