/**
 * @filename './lib/direntry.interface.js'
 * @fileoverview define and export an interface for the classes which will be implmented
 * exactly once for each and every directory and file contained inside
 * the 'top' directory.
 * @author Ben Merchant <https://benmerchant.dev>
 * @licence MIT
 * @copyright 2019
 *
 * @version 0.0.4 - separate into a proper library
 *
 * @api private
 */
'use strict';
/** // TODO: handle other types of directory entires (socket, fifo, etc) */

/**
  * Interface for the two types of directory entries that interest us
  * - files
  * - directories
  * Each has its own unique properties germane to our main functionality
  *
  * @param {DirectoryDE || null} parent must be a DirectoryDE as files are barren*
  * @param {String} name Node will get this name for us from the OS
                    ** FileDE will have name and fileType
  * @param {Int} level - Head is 0. Increment each level down you traverse
  * @param {Int} levelId - DirectoryDE have children members which are arrays,
                          levelId is the index of this DE in its parent's 'children' array
  * // -doesn't need to be in the constructor. the design/separation handles that for us
  * @prop {Enum | String} entryType ['directory', 'file']
  *
  */

class IDirectoryEntry{
  // TODO: change args into ONE object
  constructor(parent, name, level, levelId){
    this.name = name;
    this.parent = parent;

    this.level = level;
    this.levelId = levelId;
  }
}

module.exports = IDirectoryEntry;

// * barren - unable to bear concieve and bear childen
