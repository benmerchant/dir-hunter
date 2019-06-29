'use strict';
/**
 * @filename './lib/direntry.interface.js'
 * @fileoverview define and export an interface for the classes which will be implmented exactly once for each and every directory and file contained inside the 'top' directory.
 * @author Ben Merchant <https://benmerchant.dev>
 * @licence MIT
 * @copyright 2019
 * @version 0.0.6
 */
/**
 * @interface
 * Interface for the two types of directory entries that interest us
 * - files
 * - directories
 * Each has its own unique properties germane to our main functionality
 * switched to an Object as the parameter since you can only call Super constructor once
 * @param {Object}
 *            {
 *              * @prop {DirectoryDE || null} parent must be a DirectoryDE as files are barren*
 *              * @prop {String} name Node will get this name for us from the OS
 *                                ** FileDE will have name and fileType
 *              * @prop {Int} level - Head is 0. Increment each level down you traverse
 *              * @prop {Int} levelId - DirectoryDE have children members which are arrays,
 *                                      levelId is the index of this DE in its parent's 'children' array
 *            }
 * // -doesn't need to be in the constructor. the design/separation handles that for us
 * @prop {Enum | String} entryType ['directory', 'file']
 */
class IDirectoryEntry{
  /**
   * @param {Object<string,string,string>} genericObject
   * @constructor
   */
  constructor(genericObject){
    this.name = genericObject.name;
    this.parent = (genericObject.parent) ? genericObject.parent : null;
  }
}
module.exports = IDirectoryEntry;
// * barren - unable to bear concieve and bear childen
