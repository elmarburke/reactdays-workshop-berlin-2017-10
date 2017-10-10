import React, { Component } from "react";
import Status from "components/Status";

import TopBar from "./components/TopBar";
import StatusList from "./components/StatusList";

export default class HomeScene extends Component {
  render() {
    return [<TopBar />, <StatusList />];
  }
}
