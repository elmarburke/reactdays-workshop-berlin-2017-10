import React, { Component } from "react";

import TopBar from "./components/TopBar";
import StatusList from "./components/StatusList";
import Compose from "./components/Compose";

const statusList = [
  { _id: 1, date: "2016-04-11T12:44:12", text: "I think React is cool" },
  {
    _id: 2,
    date: "2016-11-01T09:04:20",
    text: "Cool, pouchdb does cool things"
  }
];

export default class HomeScene extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Compose />
        <StatusList />
      </div>
    );
  }
}
