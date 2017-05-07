/**
 * Test for TheHistoryResource.
 * Runs with mocha.
 */
'use strict'

const { TheDb } = require('the-db')
const TheHistoryResource = require('../lib/TheHistoryResource')
const { ok, equal } = require('assert')

describe('the-resource-history', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    ok(TheHistoryResource)

    let db = new TheDb({
      dialect: 'memory'
    })

    db.load(TheHistoryResource, 'TheHistoryResource01')

    let { TheHistoryResource01 } = db.resources
    let entity01 = await TheHistoryResource01.create({})
    ok(entity01)
  })
})

/* global describe, before, after, it */
