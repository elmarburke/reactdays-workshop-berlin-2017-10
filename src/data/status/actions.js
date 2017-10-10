export const FETCH_LIST = "data/status/FETCH_LIST";
export const ADD = "data/status/ADD";

export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: [
    { _id: 1, date: "2016-04-11T12:44:12", text: "I think React is cool" },
    {
      _id: 2,
      date: "2016-11-01T09:04:20",
      text: "Cool, pouchdb does cool things"
    }
  ]
});

export const addStatus = status => ({
  type: ADD,
  payload: status
});
