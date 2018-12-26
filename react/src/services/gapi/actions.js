import * as types from './types';

export function gapiUpdateStatus(isSignedIn, isAuthorized, user) {
  return {
    type: types.GAPI_UPDATE_STATUS,
    payload: {isSignedIn, isAuthorized, user}
  }
}

export function gapiToggleAuth() {
  return {type: types.GAPI_TOGGLE_AUTH};
}

export function gapiReauth() {
  return {type: types.GAPI_REAUTH};
}

export function gapiRevoke() {
  return {type: types.GAPI_REVOKE};
}

export function memberDataLoaded(data) {
  return {
    type: types.MEMBER_DATA_LOADED,
    payload: data
  };
}
