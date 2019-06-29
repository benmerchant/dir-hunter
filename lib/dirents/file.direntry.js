'use strict';
/**
  * @filename './lib/file.direntry.js'
  * @fileoverview implement IDirectoryEntry interface with members/methods unique to file Dirents
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  * @api private
  */
/** @type {Interface} IDirectoryEntry */
const IDirectoryEntry = require('./direntry.interface');
/**
  * Extend the IDirectoryEntry class
  * The {DE} -suffix is an acronym for 'Directory Entry'
  * @param {Object}
  *        {
  *            @prop {DirectoryDE || null} parent must be a DirectoryDE as files are barren*
  *            @prop {String} name Node will get this name for us from the OS
  *            @prop {Int | >=1} level - Files can NOT be a parent, therefore, the cannot be the head
  *            *                           must be greater than or equal to 1 (one)
  *            @prop {Int} levelId - DirectoryDE have children members which are arrays,
  *            *                        levelId is the index of this DE in its parent's 'children' array
  *            @prop {String} fileType - could be any file type
  *          }
  * // -doesn't need to be in the constructor. the design/separation handles that for us
  * @prop {String} entryType 'file'
  */
class FileDE extends IDirectoryEntry {
  /** @constructor */
  constructor(fileObject){
    super(fileObject);
    this.fileType = fileObject.fileType;
    this.entryType = 'file';
  }
}
FileDE.prototype.toString = function(){ return `{\"file\": \"${this.parent}\\\\${this.name}.${this.fileType}\"}\n`; }
module.exports = FileDE;
// * barren - unable to bear concieve and bear childen
