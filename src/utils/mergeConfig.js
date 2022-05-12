/*
 * @Author: Jackie
 * @Date: 2022-05-12 17:20:34
 * @LastEditTime: 2022-05-12 18:12:40
 * @LastEditors: Jackie
 * @Description: mergeConfig合并配置文件
 * @FilePath: /vue-admin-Background-template/src/utils/mergeConfig.js
 * @version: 
 */

'use strict';

var utils = require('./utils');

/**
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};


  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2));
  // .filter(function filterAxiosKeys(key) {
  //   return axiosKeys.indexOf(key) === -1;
  // });
  utils.forEach(otherKeys, mergeDeepProperties);
  return config;
};