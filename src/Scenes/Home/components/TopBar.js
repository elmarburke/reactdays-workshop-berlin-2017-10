import React from 'react';
import { bool } from 'prop-types';
import Logo from 'components/Logo';
import HeaderLink from 'components/HeaderLink';
import TopBarWrapper from 'components/TopBarWrapper';
import { connect } from 'react-redux';
import { getReplicationStatus } from '../../../data/status/reducer';

class TopBar extends React.Component {
  static propTypes = {
    replicationRunning: bool.isRequired,
  }

  render() {
    const { replicationRunning } = this.props;

    return (
      <TopBarWrapper>
        <Logo />
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
        </nav>
        {replicationRunning ? '🔗' : '📵'}
      </TopBarWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  replicationRunning: getReplicationStatus(state)
});

export default connect(mapStateToProps)(TopBar);
