import { connect } from "react-redux";

import { addStatus } from "data/status/actions";

import Compose from "components/Compose";

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  onSubmit: text =>
    addStatus({
      _id: `status:${new Date().toISOString()}`,
      time: new Date().toISOString(),
      text
    })
})(Compose);
