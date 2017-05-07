/**
 * Create a TheHistoryResource instance
 * @function create
 * @param {...*} args
 * @returns {TheHistoryResource}
 */
'use strict'

const TheHistoryResource = require('./TheHistoryResource')

/** @lends create */
function create (...args) {
  return new TheHistoryResource(...args)
}

module.exports = create
