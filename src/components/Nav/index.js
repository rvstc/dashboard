import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'routes';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={paths.dashboard}>Dashboard</Link>
          </li>
          <li>
            <Link to={paths.settings}>Settings</Link>
          </li>
          <li>
            <Link to={paths.about}>About</Link>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}
