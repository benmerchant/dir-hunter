/**
  * @filename
  * @fileoverview [describe this file]
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  */
const DirectoryDE = require('./dirents/directory.direntry');

const topDirObject = { name: __dirname, parent: null };

// never change .OriginalParent. EVER
// currentParent could change every iteration
// currentParent should NEVER equal previousParent

const AppState = {
  currentParent: new DirectoryDE(topDirObject),
  previousParent: null,
  OriginalParent: new DirectoryDE(topDirObject)
};

module.exports = AppState;
