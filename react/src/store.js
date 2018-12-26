import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import userMiddleware from 'services/user/middleware';
import gapiMiddleware from 'services/gapi/middleware';
import scanMiddleware from 'services/scan/middleware';
import reducer from './reducers';


const middleware = applyMiddleware(
    /*logger,*/
    promise(),
    new userMiddleware(),
    new gapiMiddleware(),
    new scanMiddleware());

export default createStore(reducer, middleware);
