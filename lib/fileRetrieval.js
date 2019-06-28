'use strict';
/**
  * @filename './lib/fileRetrieval.js'
  * @fileoverview import fs & path Node modules for now, you must start searching in the current working directory
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  */
/**
  * { Native Node Module Dependencies }; anticipating only needing [fs, path] 'best laid plans of mice and men' amirite?
  * {IDirectoryEntry subclasses}
  */
const fs = require('fs'),
      path = require('path');
/**
  *   fileFinder.readCurrentDirectoryReturnAllDirEnts**
  *   access the local file system relative to './index.js'
  *   basically search the '.' in './index.js'
  *
  *   loop through an array of {fs.Dirent objects}
  *       - we'll call them {entities} - for a variable name
  *   fs.readdir(path, {options}, cb)
  *     ^^^^{options.withFileTypes: true} - signals the function to provide the array
  *                 of files (the second arg of the callback fn) as
  *                 {fs.Dirent} objects, not {Strings}/{Buffers}-
  *
  *
  *   @param {String | Default = '../'};
  *   @returns {Array | IDirectoryEntry} [*arrayOfDirectoryEntries]
  *                - each element in array will be either DirectoryDE or FileDE
  *   @api private
  */
const fileFinder = {};

fileFinder.readCurrentDirectoryReturnAllDirEnts = (pathToDirectory) => {

  const options = {withFileTypes:true};
  return fs.readdirSync(pathToDirectory, options);
};

module.exports = fileFinder;

// ** I read a blog that said 'we aren't hurting for storage space anymore
      // make your variable names as long as you need to be self-documenting
