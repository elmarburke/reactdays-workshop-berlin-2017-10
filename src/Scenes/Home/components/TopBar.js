import React, { Component } from 'react';
import Logo from 'components/Logo';
import HeaderLink from 'components/HeaderLink';

class TopBar extends Component {
  render() {
    const { replicationRunning } = this.props;

    return (
      <TopBarWrapper>
        <Logo />
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
        </nav>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
