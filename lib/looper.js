/**
  * @filename lib\looper.js
  * @fileoverview defines and exports the function that will be called
  * recursively  by child elements
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  */

/**
  *
  *
  * @param {Array | fs.Dirent} direntArray
  *
  * @returns {*}
  *
  */

const fileFinder = require('./fileRetrieval');
const DirectoryDE = require('./dirents/directory.direntry');
const FileDE = require('./dirents/file.direntry');



const looper = {};

/**
  * @returns {Array | Dirent}
  */

looper.loopDirentsArray = () => {
  /** @type {array} call fileFinder  */
  const thisArray =  fileFinder.readCurrentDirectoryReturnAllDirEnts();
  return thisArray;
};

/**
  * @param {Array | Dirent} currentDirEntries
  * @param {Object} currentcurrentAppState
  * @param {*} arg
  *
  * @returns {*}
  *
  */

looper.oneIteration = (currentDirEntries, currentAppState) => {
  currentDirEntries.forEach((node, ii, origArray) => {
    let parentLvl = currentAppState.currentParent.level;
    let parentName = currentAppState.currentParent.name.split('\\').pop();
    let tempPlainObj = {
      name: node.name,
      parent: currentAppState.currentParent.name.split('\\').pop(),
      level: parentLvl + 1,
      levelId: ii
    }

    // had to structure as such due to lexical scoping
    // wanted the '...children.push() to be outside of if/else'
    let tempDEobj = {};
    if (node.isFile()) { tempDEobj.pushThis = makeFileDE(node,tempPlainObj);}
    else if (node.isDirectory()) { tempDEobj.pushThis = makeDirectoryDE(tempPlainObj);  }
    else {throw 'no clue how you got here, must have weird directory entries';}
    currentAppState.currentParent.children.push(tempDEobj.pushThis);
    // if children.length = direntArray.length, children have all been checked
    let childLength = currentAppState.currentParent.children.length;
    let direntLength = currentDirEntries.length;
    if(childLength===direntLength) currentAppState.currentParent.childCheck = true;
  });
  console.log(currentAppState);
};



function makeFileDE(nodeInput, tempPlainObjInput) {
  if(nodeInput.name.split('.')===2){tempPlainObj.fileType = name.split('.')[1];}
  else {  tempPlainObjInput.fileType = 'unknown';}
  return new FileDE(tempPlainObjInput);
}

function makeDirectoryDE(tempPlainObjInput){
  return new DirectoryDE(tempPlainObjInput);
}

module.exports = looper;
