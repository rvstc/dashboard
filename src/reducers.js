import { combineReducers } from 'redux';
import gapiReducer from 'services/gapi/reducer';
import userReducer from 'services/user/reducer';


export default combineReducers({
  gapi: gapiReducer,
  user: userReducer,
});
