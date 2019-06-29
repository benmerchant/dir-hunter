'use strict';
/**
 * @filename '/noitunes/index.js'
 * @fileoverview crawl through a given directory searching for files and more (child) directories.
 * files are to be removed from their current home and segregated into new directories which are respectively named for the types of files they contain.
 * child directories, when/if encountered, will trigger **the_function** to be called again with each child dir being passed as a parameter
 * @author Ben Merchant <https://benmerchant.dev>
 * @licence MIT
 * @copyright 2019
 * @version 0.0.6
 */
const DirectoryDE = require('./lib/dirents/directory.direntry'),
      FileDE = require('./lib/dirents/file.direntry'),
      AppConfig = require('./lib/appConfig'),
      fileFunctions = require('./lib/fileRetrieval');

/** instantiate top directory */
const currentDirectory = new DirectoryDE(AppConfig.topDirObject);
// console.log(currentDirectory);



/** filter undefined */
const topChildFiles = currentDirectory.childrenFiles.filter((child) => {
  if(child) return child;
});

/** @param {string} child the child file name no path */
const topChildFilesDEsArr = topChildFiles.map((child, ii, arr) => {
    let tempChildSplitArr = child.split('.');

    const thisChildFileDE =  new FileDE({
      fileType: tempChildSplitArr[1].toLowerCase(),
      name: tempChildSplitArr[0],
      parent: currentDirectory.name
    });
    /** move files to new location */
    fileFunctions.moveFiles(`${currentDirectory}\\${thisChildFileDE.name}`, `${AppConfig.newPathForStuff}\\${thisChildFileDE.name}`,() => {
      console.log('files moved');
    });

    return thisChildFileDE;
});
console.log(topChildFilesDEsArr);
console.log(currentDirectory);




console.log('####################\n### END INDEX.js ###\n####################');
