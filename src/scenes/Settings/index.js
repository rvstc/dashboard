import React, { Component } from 'react';
import GapiSettings from './components/GapiSettings';


export default class Settings extends Component {

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <br />
        <GapiSettings />
      </div>
    );
  }
}
