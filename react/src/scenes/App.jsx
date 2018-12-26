import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from 'components/Nav';
import Routes from 'routes';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <>
            <Nav />
            {/* Give content top-padding, so it isn't hidden on page render. */}
            <TopAppBarFixedAdjust>
              <Routes />
            </TopAppBarFixedAdjust>
          </>
        </Router>
      </Provider>
    );
  }
}
