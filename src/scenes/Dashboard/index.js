import React, { Component } from 'react';
import UserLookup from './components/UserLookup';


export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <br />
        <UserLookup />
      </div>
    );
  }
}
