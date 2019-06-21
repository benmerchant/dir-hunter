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

childBuilder.returnTheArray = (arrayOfDirentsInput, parentDE) => {
  const _childNameTypeArray =  _buildChildrensNameTypeArray(arrayOfDirentsInput);
  return _segretageAndObjectifyTheChildren(_childrensNameTypeArray);
}

/** segregate the children */
function _segretageAndObjectifyTheChildren(childrensNameTypeArray){
  childrensNameTypeArray.map((thisChildElement) => {
    if(thisChildElement.type === 'directory'){
      return new DirectoryDE({

      })
    } else if(thisChildElement.type === 'file') {
      /** @type {Object: name * fileType}  */
      const nameAndFileType = _getNameAndFileType(thisChildElement.fullFileName);
      return new FileDE({
        name: nameAndFileType.name,
        parent: parentDE.name,
        fileType: nameAndFileType.fileType
      })
    }
  });
}

/** make this function static*/
function _buildChildrensNameTypeArray(arrayOfDirents){
  return fileFinder.readCurrentDirectoryReturnAllDirEnts(arrayOfDirents).map((thisDirent) => {
    return {
      name: thisDirent.fullFileName,
      type: (thisDirent.isDirectory()) ? 'directory' : 'file'
    }
  });
}


function _getNameAndFileType(fullFileName){
  const nameAndFileTypeArray = fullFileName.split('.');
  return {
    name: nameAndFileTypeArray[0],
    fileType: nameAndFileTypeArray[1]
  }
}

module.exports = childBuilder;
