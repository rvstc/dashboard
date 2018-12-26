import * as types from './types';
import {gapiUpdateStatus, memberDataLoaded} from './actions';


const API_KEY = 'AIzaSyBCvgn0n9lJ20sDK6jVG-92Yedf1foqjgE';
const CLIENT_ID = '617186283105-5e603j6qc477f5q603nf8kef6s34aeov.apps.googleusercontent.com';
const DISCOVERY_URL = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

const SPREADSHEET_ID = '13bsAu7wG39q0khrefawv5jbgGAz9aKSOMvVfbqsmSWU';
const MEMBERS_SHEET_NAME = 'Members';

const GAPI_SCRIPT_ID = 'gapi-script';
const MEMBER_DATA_REFRESH_INTERVAL = 5 * 1000 * 1000;


export default class GapiMiddleware {

  constructor() {
    if (!document.getElementById(GAPI_SCRIPT_ID)) {
      this.loadGapi();
    }
    return store => {
      this.store = store;
      return this.muxer();
    };
  }

  muxer() {
    return next => action => {
      if (action.type === types.GAPI_TOGGLE_AUTH) {
        this.toggleAuth();
      } else if (action.type === types.GAPI_REAUTH) {
        this.reauth();
      } else if (action.type === types.GAPI_REVOKE) {
        this.revokeAccess();
      }
      return next(action);
    };
  }

  /** Injects the Google API script into the DOM. */
  loadGapi() {
    const script = document.createElement('script');
    script.id = GAPI_SCRIPT_ID;
    script.src = 'https://apis.google.com/js/api.js';

    script.onload = () => {
      script.onload = () => {};
      window.gapi.load('client', this.initClient.bind(this));
    };

    document.body.appendChild(script);
  }

  /** Initializes the GoogleAuth client using the app info. */
  initClient() {
    window.gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'discoveryDocs': [DISCOVERY_URL],
      'scope': SCOPE,
    }).then(function () {
      this.GoogleAuth = window.gapi.auth2.getAuthInstance();
      this.GoogleAuth.isSignedIn.listen(this.handleStatusUpdate.bind(this));
      this.handleStatusUpdate(this.GoogleAuth.isSignedIn.get());
    }.bind(this));
  }

  /** Listener called when user signin status changes. */
  handleStatusUpdate(isSignedIn) {
    let isAuthorized = false;
    let user = {};

    this.GoogleUser = this.GoogleAuth.currentUser.get();
    if (isSignedIn) {
      isAuthorized = this.GoogleUser.hasGrantedScopes(SCOPE);
      const basicProfile = this.GoogleUser.getBasicProfile();
      user = {
        id: basicProfile.getId(),
        name: basicProfile.getName(),
        givenName: basicProfile.getGivenName(),
        familyName: basicProfile.getFamilyName(),
        imageUrl: basicProfile.getImageUrl(),
        email: basicProfile.getEmail(),
      };
    }

    if (this.loadMemberDataInterval) {
      clearInterval(this.loadMemberDataInterval);
    }

    if (isAuthorized) {
      this.loadMemberData();
      this.loadMemberDataInterval = setInterval(
        this.loadMemberData.bind(this), MEMBER_DATA_REFRESH_INTERVAL);
    }

    this.store.dispatch(gapiUpdateStatus(isSignedIn, isAuthorized, user));
  }

  toggleAuth() {
    if (this.GoogleAuth.isSignedIn.get()) {
      this.GoogleAuth.signOut();
    } else {
      this.GoogleAuth.signIn();
    }
  }

  reauth() {
    this.GoogleUser.grant({scope: SCOPE});
  }

  revokeAccess() {
    this.GoogleAuth.disconnect();
  }

  loadMemberData(spreadsheetId = SPREADSHEET_ID, range = MEMBERS_SHEET_NAME) {
    window.gapi.client.sheets.spreadsheets.values
      .get({spreadsheetId, range})
      .then((response) => {
        this.store.dispatch(memberDataLoaded(response.result.values));
      });
  }
}

