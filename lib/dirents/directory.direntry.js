/**
 * @filename './lib/directory.direntry.js'
 * @fileoverview implement IDirectoryEntry interface with members/methods
 * unique to directory Dirents

 * @author Ben Merchant <https://benmerchant.dev>
 * @licence MIT
 * @copyright 2019
 *
  * @version 0.0.5 - restructure for recursion
 *
 * @api private
 */
'use strict';
/** @type {Interface} IDirectoryEntry */
const IDirectoryEntry = require('./direntry.interface');
/**
  * Extend the IDirectoryEntry class
  * The {DE} -suffix is an acronym for 'Directory Entry'
  * @param {Object}
  *            {
  *              * @prop {DirectoryDE || null} parent must be a DirectoryDE as files are barren*
  *              * @prop {String} name Node will get the directory's name from the OS via {fs} -module
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
  constructor(directoryObject){
    //call super Class first so we can use *this*
    super(directoryObject); // the TopDir will have: no parent, the lowest level index, no siblings***// since we can't overload the constructor, we have to send values along// level/levelId , however, I like this way... leaves less up to chance

    // // if we're already here, then we know the entryType
    this.entryType = 'directory';
    // // many directories won't have children, we'll delete it later
    this.children = []; // empty array to .push(children) into
    // // need flag to know if we have already checked the current dir for children
    this.childCheck = false;
  }
}

module.exports = DirectoryDE;

// * barren - unable to bear concieve and bear childen
// *** how could TopDir have siblings if it doesn't even have one parent
