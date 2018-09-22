import * as types from './types';


export function logUser(user) {
  return {
    type: types.LOG_USER,
    payload: { user }
  };
}

export function lookupUser(query) {
  return {
    type: types.LOOKUP_USER,
    payload: { query }
  };
}

export function lookupResults(results) {
  return {
    type: types.LOOKUP_RESULTS,
    payload: { results }
  };
}
