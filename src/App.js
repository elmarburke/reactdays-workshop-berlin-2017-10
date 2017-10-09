import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeScene from './Scenes/Home';

class App extends Component {
  render() {
    return <Route path="/" exact component={HomeScene} />;
  }
}

export default App;
