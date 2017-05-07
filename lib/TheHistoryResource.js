/**
 * History resource for the-db
 * @augments Resource
 * @class TheHistoryResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING } = DataTypes

/** @lends TheHistoryResource */
class TheHistoryResource extends Resource {
  static get policy () {
    return {
    }
  }

  static entityClass (ResourceEntity) {
    /** @class */
    class TheHistoryResourceEntity extends ResourceEntity {
    }
    return TheHistoryResourceEntity
  }
}

module.exports = TheHistoryResource
