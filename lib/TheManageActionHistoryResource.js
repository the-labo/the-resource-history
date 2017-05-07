/**
 * History of action
 * @augments Resource
 * @class TheManageActionHistoryResource
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING, DATE, OBJECT } = DataTypes

/** @lends TheManageActionHistoryResource */
class TheManageActionHistoryResource extends Resource {
  static get policy () {
    return {
      resourceName: {
        description: 'Target resource name',
        type: STRING
      },
      action: {
        description: 'ManageAction type',
        type: STRING
      },
      params: {
        description: 'ManageAction params',
        type: OBJECT
      },
      at: {
        description: 'Date recorded at',
        type: DATE,
        default: () => new Date()
      },
      by: {
        description: 'User id who call the action',
        type: STRING
      }
    }
  }

  static entityClass (ResourceEntity) {
    /** @class */
    class TheManageActionHistoryResourceEntity extends ResourceEntity {
    }
    return TheManageActionHistoryResourceEntity
  }
}

module.exports = TheManageActionHistoryResource
