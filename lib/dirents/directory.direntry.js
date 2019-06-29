'use strict';
/**
  * @filename './lib/directory.direntry.js'
  * @fileoverview implement IDirectoryEntry interface with members/methods unique to directory Dirents
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  * @api private
  */
/** @type {Interface} IDirectoryEntry */
const IDirectoryEntry = require('./direntry.interface');
const childBuilder = require('./childArrayBuilder.service');
/**
  * Extend the IDirectoryEntry class
  * The {DE} -suffix is an acronym for 'Directory Entry'
  * @param {Object}
  *            {
  *              * @prop {DirectoryDE OR null} - parent must be a DirectoryDE as files are barren*
  *              * @prop {String} name - Node will get the directory's name from the OS via {fs} -module
  *              * @prop {Int} level - Head is 0. Increment each level down you traverse
  *              * @prop {Int} levelId - DirectoryDE have children members which are arrays,
  *              *                        levelId is the index of this DE in its parent's 'children' array
  *            }
  * // -doesn't need to be in the constructor. the design/separation handles that for us
  * @prop {String} entryType 'directory'
  * @prop {Array | [DirectoryDE || FileDE]} children - array contaning multiple instantiated {DirectoryDE} || {FileDE}
  *                                                  - objects. One for each and every Directory Entry entry inside of it
  */
class DirectoryDE extends IDirectoryEntry {
  /** @constructor */
  constructor(directoryObject){
    // call super Class first so we can use *this*
    super(directoryObject); // the TopDir will have: no parent, the lowest level index, no siblings***// since we can't overload the constructor, we have to send values along// level/levelId , however, I like this way... leaves less up to chance
    // if we're already here, then we know the entryType
    this.entryType = 'directory';
    // need flag to know if we have already checked the current dir for children
    this.childCheck = false;
    // empty array add files and dirs individually
    this._children = childBuilder.returnSimpleNameTypeArray(directoryObject.name);
    /** only directories need level info */
    this.level =  (directoryObject.homeflag===true) ? 0 : directoryObject.level;
    this.levelId = (directoryObject.homeflag===true) ? 0 : directoryObject.levelId;
  }
  get childrenFiles() {
    return this._children.map((child,ii,arr) => {
      let childReturner = '';
      if(child.type === 'file'){ childReturner = child.name; }
      else { childReturner = undefined; }

      return childReturner;
    });
  }
}
DirectoryDE.prototype.toString = function(){ return `Directory: ${this.name}\n`; }
module.exports = DirectoryDE;
// * barren - unable to bear concieve and bear childen
// *** how could TopDir have siblings if it doesn't even have one parent
