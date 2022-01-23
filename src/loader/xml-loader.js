/*
 * @Author: Sunny
 * @Date: 2022-01-15 19:04:20
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-15 19:08:28
 * @Description: 
 * @FilePath: /webpack-loader/src/loader/xml-loader.js
 */

const loaderUtils = require('loader-utils');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
module.exports = function(source) {
    this.cacheabel && this.cacheabel();
    const options = loaderUtils.getOptions(this);
    const self = this;
    parser.parseString(source, function(err, result) {
        self.callback(err, !err && "module.exports = " + JSON.stringify(result));
    })
}

