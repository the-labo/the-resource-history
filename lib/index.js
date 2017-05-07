/**
 * History resource for the-db
 * @module the-resource-history
 */
'use strict'

const TheHistoryResource = require('./TheHistoryResource')
const ThePasswordHistoryResource = require('./ThePasswordHistoryResource')
const TheManageActionHistoryResource = require('./TheManageActionHistoryResource')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
    TheHistoryResource,,
  ThePasswordHistoryResource,
  TheManageActionHistoryResource,
  create
})

module.exports = lib
