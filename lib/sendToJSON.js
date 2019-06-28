'use strict';
/**
  * @filename ./lib/sentToJSON.js
  * @fileoverview take the DE and add to JSON
  * @author Ben Merchant <https://benmerchant.dev>
  * @licence MIT
  * @copyright 2019
  * @version 0.0.6
  */
const fs = require('fs');
const addToJSON = {};
addToJSON.sendDEtoJSON = (DirentObject) => {
  fs.open('DEobject.json','a', (err, fd) => {
    if(err) throw err;
    fs.appendFile(fd, DirentObject.toString(), 'utf8', (err) => {
      fs.close(fd,(err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });
}
module.exports = addToJSON;
