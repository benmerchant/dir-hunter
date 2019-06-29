'use strict';
/**
  * @filename
  * @fileoverview [describe this file]
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  */
/** This should never change; singleton implementation */
class AppConfig {
  constructor(path){
    this.topDirObject = {
      name: path, parent: null, homeflag: true
    };
    this.newPathForStuff = 'C:\\users\\ben merchant\\desktop\\newLocation\\';
  }
}
const singletonAppConfig = new AppConfig('C:\\users\\ben merchant\\desktop\\noitunes\\test');
Object.freeze(singletonAppConfig);
module.exports =  singletonAppConfig;
