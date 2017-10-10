import PouchDB from "pouchdb";
export const FETCH_LIST = "data/status/FETCH_LIST";
export const ADD = "data/status/ADD";

const db = new PouchDB("micro-status");
window.db = db; // MACHT DAS NICHT IN PRODUCTION! NUR HIER IST DAS OK!

export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: db
    .allDocs({ include_docs: true })
    .then(result => result.rows.map(row => row.doc))
});

export const addStatus = status => ({
  type: ADD,
  payload: db.put(status)
});
