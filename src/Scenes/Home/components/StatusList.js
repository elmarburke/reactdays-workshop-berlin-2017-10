import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { connect } from "react-redux";

import Status from "components/Status";
import { getAllStatus } from "data/status/reducer";
import {
  fetchStatus,
  subscribeToPouchChangesFeed,
  unsubscribeFromChangesFeed
} from "data/status/actions";

class StatusList extends Component {
  static propTypes = {
    statusList: arrayOf(Status.propTypes.status).isRequired,
    fetchStatus: func.isRequired
  };

  componentDidMount() {
    this.props.fetchStatus();
    this.changesFeed = this.props.subscribeToPouchChangesFeed()
  }

  componentWillUnmount() {
    this.props.unsubscribeFromChangesFeed(this.changesFeed);
  }

  render() {
    return this.props.statusList.map(status => (
      <Status status={status} key={status._id} />
    ));
  }
}

function mapStateToProps(state) {
  return {
    statusList: getAllStatus(state)
  };
}

export default connect(mapStateToProps, {
  fetchStatus,
  subscribeToPouchChangesFeed,
  unsubscribeFromChangesFeed
})(StatusList);
