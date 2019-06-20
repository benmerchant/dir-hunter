/**
  * @filename
  * @fileoverview [describe this file]
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  * @version 0.0.5 - restructure for recursion
  */

/** This should never change */
/** singleton implementation */

class AppConfig {
  constructor(path){
    this._topDirObject = {
      name: path, parent: null
    }
  }
}

const singletonAppConfig = new AppConfig('C:\\users\\ben merchant\\desktop\\noitunes\\test');
Object.freeze(singletonAppConfig);

module.exports =  singletonAppConfig;
