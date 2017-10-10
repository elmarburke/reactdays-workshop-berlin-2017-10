import PouchDB from 'pouchdb'
import { getReplicationStatus } from './reducer'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_ITEM = 'data/status/FETCH_ITEM'
export const ADD = 'data/status/ADD'
export const SUBSCRIBED = 'data/status/SUBSCRIBED'
export const UNSUBSCRIBED = 'data/status/UNSUBSCRIBED'
export const CHANGED = 'data/status/CHANGED'
export const REPLICATION_STARTED = 'data/status/REPLICATION_STARTED'
export const REPLICATION_STOPPED = 'data/status/REPLICATION_STOPPED'

const db = new PouchDB('micro-status')

export const fetchStatusById = (id) => ({
  type: FETCH_ITEM,
  payload: db.get(id)
})


export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: db.allDocs({include_docs: true, descending: true})
    .then(result => result.rows.map(row => row.doc))
})

export const addStatus = (status) => {
  return {
    type: ADD,
    payload: db.put(status)
      .then(result => db.get(result.id))
  }
}

const streamValueReceived = changes => ({
  type: CHANGED,
  payload: changes.doc
})

export const subscribeToPouchChangesFeed = () => (dispatch) => {
  dispatch({type: SUBSCRIBED})
  return db.changes({
    include_docs: true,
    since: 'now',
    live: true
  }).on('change', (result) => dispatch(streamValueReceived(result)))
}

export const unsubscribeFromChangesFeed = (feed) => {
  feed.cancel()

  return {type: UNSUBSCRIBED}
}


export const startReplication = () => ((dispatch, getState) => {
  const sync = db.sync(
    'http://'+window.location.hostname + ':5984/micro-status',
    {
      live: true,
      retry: true
    }
  );

  sync.pull.on('active', () => {
    const replicationRunning = getReplicationStatus(getState())

    if(!replicationRunning) {
      dispatch({type: REPLICATION_STARTED})
    }
  }).on('paused', (err) => {
    const replicationRunning = getReplicationStatus(getState())

    if (replicationRunning && err) {
      dispatch({ type: REPLICATION_STOPPED })
    }

    if (!replicationRunning && !err) {
      dispatch({ type: REPLICATION_STARTED })
    }
  })


  dispatch({type: REPLICATION_STARTED})
})
