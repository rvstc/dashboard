import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lookupUser } from 'services/user/actions';
import UserPicker from '../UserPicker';
import TextField, { HelperText, Input } from '@material/react-text-field';


class _UserLookup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  _handleQueryChange(event) {
    this.setState({ query: event.target.value });
  }

  _handleQuerySubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.dispatch(lookupUser(this.state.query));
  }

  render() {
    return (
      <>
        <form onSubmit={this._handleQuerySubmit.bind(this)}>
          <TextField
            label='Member name or #'>
            <Input
              value={this.state.query}
              onChange={this._handleQueryChange.bind(this)} />
          </TextField>
        </form>
        <UserPicker />
      </>
    );
  }
}

const UserLookup = connect(
  store => {
    return {};
  }
)(_UserLookup);

export default UserLookup;

