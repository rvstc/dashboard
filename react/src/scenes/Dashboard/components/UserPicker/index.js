import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUser } from 'services/user/actions';


class _UserPicker extends Component {

  _handlePick(event) {
    this.props.dispatch(logUser('picked_user'));
  }

  render() {
    if (this.props.options) {
      return (
        <>
          <button onClick={this._handlePick.bind(this)}>Pick</button>
        </>
      );
    }
    return null;
  }
}

const UserPicker = connect(
    store => {
      return {
        options: store.user.lookupResults,
      };
    }
)(_UserPicker);

export default UserPicker;

