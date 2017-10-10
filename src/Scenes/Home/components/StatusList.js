import React from "react";
import { arrayOf, func } from "prop-types";
import { connect } from 'react-redux';

import Status from "components/Status";
import { getAllStatus } from "data/status/reducer"
import { fetchStatus } from "data/status/actions"

class StatusList extends React.Component {
  static propTypes = {
    statusList: arrayOf(Status.propTypes.status).isRequired,
    fetchData: func.isRequired
  };

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return this.props.statusList.map(statusItem => (
      <Status status={statusItem} key={statusItem._id} />
    ));
  }
}

const mapStateToProps = (state) => ({
  statusList: getAllStatus(state)
});

export default connect(mapStateToProps, {
  fetchData: fetchStatus
})(StatusList);
