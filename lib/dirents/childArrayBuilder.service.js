"use strict";
/**
  * @filename ./lib/childArrayBuilder.service.js
  * @fileoverview takes an array of Dirents from a directory and returns an array of DirectoryDE & FileDE
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  */
/** @function returns {Array | IDirectoryEntry} arrayOfDirectoryEntries */
const fileFinder = require('../fileRetrieval'),
      jsonFunction = require('../sendToJSON');
const FileDE = require('./file.direntry'),
      DirectoryDE = require('./directory.direntry');

const childBuilder = {};

childBuilder.returnSimpleNameTypeArray = (parentDirPath) => {
  return _buildChildrensNameTypeArray(parentDirPath);
};



/** @deprecated */
childBuilder.returnTheArray = (parentDEPath) => {
  const _childrensNameTypeArray =  _buildChildrensNameTypeArray(parentDEPath);
  return _segretageAndObjectifyTheChildren(_childrensNameTypeArray,parentDEPath);
}
/** segregate the children */
function _segretageAndObjectifyTheChildren(childrensNameTypeArray,parentDEPath){
  const newArray =  childrensNameTypeArray.map((thisChildElement) => {
    if(thisChildElement.type === 'directory'){
      const thisChildDirDE = new DirectoryDE({
       name: parentDEPath+'\\'+thisChildElement.name,
       parent: parentDEPath
     });
      jsonFunction.sendDEtoJSON(thisChildDirDE.toString());
      return thisChildDirDE;

    } else if(thisChildElement.type === 'file') {
      /** @type {Object: name * fileType}  */
      const nameAndFileType = _getNameAndFileType(thisChildElement.name);
      jsonFunction.sendDEtoJSON(new FileDE({
       name: nameAndFileType.name,
       parent: parentDEPath,
       fileType: nameAndFileType.fileType
     }).toString());
    }
  });
  newArray.forEach((elementInArray, iii, thisArr) => { thisArr.shift(); });
  return [];
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
