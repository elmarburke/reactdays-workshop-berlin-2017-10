import React, { Component } from "react";
import Status from "components/Status";

import TopBar from "./components/TopBar";
import StatusList from "./components/StatusList";
import Compose from "./components/Compose";

export default class HomeScene extends Component {
  render() {
    return [<TopBar />, <Compose />, <StatusList />];
  }
}
