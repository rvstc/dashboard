import React, { Component } from 'react';
import { Toolbar, ToolbarRow, ToolbarTitle, ToolbarSection } from 'react-mdc-web/lib';


class _Greeter extends Component {
  render() {
    return (
      <div id='greeter'>
        Welcome {this.props.loggedUser}!
      </div>
    );
  }
}

const Greeter = connect(
    store => {
      return {
        loggedUser: store.user.loggedUser,
      };
    }
)(_Greeter);

export default Greeter;
