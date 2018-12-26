import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from 'routes';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';


export default class Nav extends Component {
  render() {
    return (
      <>
        <TopAppBar
          title='RVSTC'
          actionItems={[
            <NavLink to={paths.dashboard}><MaterialIcon icon='home' /></NavLink>,
            <NavLink to={paths.settings}><MaterialIcon icon='settings' /></NavLink>,
            <NavLink to={paths.about}><MaterialIcon icon='alternate_email' /></NavLink>]}>
        </TopAppBar>
      </>
    );
  }
}
