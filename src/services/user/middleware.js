import * as types from './types';
import { MEMBER_DATA_LOADED } from 'services/gapi/types';
import { logUser, lookupResults } from './actions';
import { loadData } from 'services/gapi/actions';


export default class UserMiddleware {

  constructor() {
    return store => {
      this.store = store;
      return this.muxer();
    };
  }

  muxer() {
    return next => action => {
      if (action.type === types.LOOKUP_USER) {
        this.lookupUser(action.payload.query);
      } else if (action.type === MEMBER_DATA_LOADED) {
        this.updateMemberData(action.payload);
      }
      return next(action);
    };
  }

  updateMemberData(data) {
    this.members = data.slice(1).reduce(function (map, row) {
      map[row[0]] = row[1];
      return map;
    }, {});
    console.log(this.members);
  }

  lookupUser(query) {
    const results = [{name: 'Jim'}, {name: 'Pam'}];

    if (results && results.length > 1) {
      this.store.dispatch(lookupResults(results));
    } else {
      this.store.dispatch(logUser(results[0].name));
    }
  }
}
