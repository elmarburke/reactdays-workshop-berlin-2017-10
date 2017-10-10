import { connect } from 'react-redux';
import Compose from 'components/Compose';

import { addStatus } from 'data/status/actions';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  onSubmit: text => addStatus({
    _id: `status:${new Date().toISOString()}`,
    time: new Date().toISOString(),
    text,
  })
})(Compose)
