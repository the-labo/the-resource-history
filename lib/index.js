/**
 * History resource for the-db
 * @module the-resource-history
 */
'use strict'

const TheHistoryResource = require('./TheHistoryResource')
const ThePasswordHistoryResource = require('./ThePasswordHistoryResource')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheHistoryResource,
  ThePasswordHistoryResource,
  create
})

module.exports = lib
