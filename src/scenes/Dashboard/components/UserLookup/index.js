import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lookupUser } from 'services/user/actions';
import UserPicker from '../UserPicker';


class _UserLookup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  _handleQueryChange(event) {
    this.setState({query: event.target.value});
  }

  _handleQuerySubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.dispatch(lookupUser(this.state.query));
  }

  render() {
    return (
      <div>
        Welcome {this.props.loggedUser}
        <form onSubmit={this._handleQuerySubmit.bind(this)}>
          <input type='text' onChange={this._handleQueryChange.bind(this)} value={this.state.query} />
        </form>
        <UserPicker />
      </div>
    );
  }
}

const UserLookup = connect(
    store => {
      return {
        loggedUser: store.user.loggedUser,
      };
    }
)(_UserLookup);

export default UserLookup;

