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
    this.members = data.slice(1).reduce(function (list, row) {
      list.push({
        id: row[0],
        name: row[1]
      });
      return list;
    }, []);
    this.membersById = this.members.reduce(function (map, member) {
      map[member.id] = member;
      return map;
    }, {});
  }

  lookupUser(query) {
    const results = [];

    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.id == query || member.name.includes(query)) {
        results.push(member);
      }
    }

    if (results.length > 1) {
      this.store.dispatch(lookupResults(results));
    } else if (results.length == 1) {
      this.store.dispatch(logUser(results[0].name));
    } else {
      // lookup failed...
    }
  }
}
