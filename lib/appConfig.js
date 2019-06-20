/**
  * @filename
  * @fileoverview [describe this file]
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  * @version 0.0.5 - restructure for recursion
  */
const DirectoryDE = require('./dirents/directory.direntry');



// never change .OriginalParent. EVER
// currentParent could change every iteration
// currentParent should NEVER equal previousParent

// const AppState = {
//
//   previousParent: null,
//   OriginalParent: new DirectoryDE(topDirObject)
// };



const AppConfig = {
  TopDirObject : {
    name: 'C:\\users\\ben merchant\\desktop\\noitunes',
    parent: null
  }
};


module.exports = AppConfig;
