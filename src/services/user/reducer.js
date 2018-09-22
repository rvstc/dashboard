import * as types from './types';


const initialState = {
  loggedUser: null,
  lookupResults: null
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case types.LOG_USER:
      return {...state, loggedUser: action.payload.user};
    case types.LOOKUP_RESULTS:
      return {...state, lookupResults: action.payload.results};
    default:
      return state;
  }
}
