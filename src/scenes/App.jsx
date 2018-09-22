import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from 'components/Nav';
import Routes from 'routes';


export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Nav />
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}
