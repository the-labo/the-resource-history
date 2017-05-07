'use strict'

const theDb = require('the-db')
const { TheHistoryResource } = require('the-resource-history')

async function tryExample () {

  let db = theDb({
    dialect: 'memory'
  })

  db.load(class extends TheHistoryResource {

  }, 'TheHistoryResource01')
  let { TheHistoryResource01 } = db.resources

  let entity01 = await TheHistoryResource01.create({ name: 'entity01' })
  /* ... */
}

tryExample().catch((err) => console.error(err))
