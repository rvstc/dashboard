import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gapiToggleAuth } from 'services/gapi/actions';


class _Settings extends Component {

  handleAuthClick() {
    this.props.dispatch(gapiToggleAuth());
  }

  render() {
    if (this.props.status === undefined) {
      return null;
    }

    const authButton = (
      <button onClick={this.handleAuthClick.bind(this)}>
        {this.props.status.isSignedIn ? 'Sign Out' : 'Sign In'}
      </button>
    );
    return (
      <div>
        <h2>Gapi</h2>
        {authButton}
      </div>
    );
  }
}

const Settings = connect(
    store => {
      return {
        status: store.gapi.status,
      };
    }
)(_Settings);

export default Settings;
