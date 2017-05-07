/**
 * History of password
 * @augments Resource
 * @class ThePasswordHistoryResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING, DATE } = DataTypes

/** @lends ThePasswordHistoryResource */
class ThePasswordHistoryResource extends Resource {
  static get policy () {
    return {
      userId: {
        description: 'Id of the target user',
        type: STRING
      },
      passwordDigest: {
        description: 'Digest of user password',
        type: STRING
      },
      at: {
        description: 'Date recorded at',
        tye: DATE,
        default: () => new Date()
      }
    }
  }

  static entityClass (ResourceEntity) {
    /** @class */
    class ThePasswordHistoryResourceEntity extends ResourceEntity {
    }
    return ThePasswordHistoryResourceEntity
  }
}

module.exports = ThePasswordHistoryResource
