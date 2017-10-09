import { ADD, FETCH_LIST, FETCH_ITEM, CHANGED, REPLICATION_STOPPED, REPLICATION_STARTED } from './actions'

import { normalize, schema } from 'normalizr'

const statusSchema = new schema.Entity('status', {}, {idAttribute: '_id'})
const statusListSchema = [ statusSchema ]

const initialState = {
  replicationRunning: false,
  byId: {},
  all: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  if (action.error) {
    return {
      ...state,
      error: action.payload
    }
  }

  switch (action.type) {
    case REPLICATION_STARTED:
      return {
        ...state,
        replicationRunning: true
      }
    case REPLICATION_STOPPED:
      return {
        ...state,
        replicationRunning: false
      }
    case `${ADD}_PENDING`:
      return {
        ...state,
        saving: true
      }
    case CHANGED:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload._id]: action.payload
        },
        all: [action.payload._id, ...state.all]
      }
    case `${FETCH_LIST}_FULFILLED`:
      const normalizedData = normalize(action.payload, statusListSchema)
      return {
        ...state,
        byId: {
          ...state.byId,
          ...normalizedData.entities.status
        },
        all: normalizedData.result
      }
    case `${FETCH_ITEM}_FULFILLED`:
      const normalizedItem = normalize(action.payload, statusSchema)
      return {
        ...state,
        byId: {
          ...state.byId,
          ...normalizedItem.entities.status
        }
      }
    default:
      return state
  }
}

export const getAllStatus = (state) => state.data.status.all.map(id => state.data.status.byId[id])
export const getOneStatus = (state, id) => state.data.status.byId[id]
export const getReplicationStatus = (state) => state.data.status.replicationRunning

export default reducer
