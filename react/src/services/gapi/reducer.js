import * as types from './types';


const initialState = {};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case types.GAPI_UPDATE_STATUS:
      return {...state, status: action.payload};
    default:
      return state;
  }
}
