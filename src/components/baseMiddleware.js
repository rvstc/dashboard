export default class BaseMiddleware {
  constructor(muxer=this.muxer) {
    this.muxer = muxer;
    return this.middleware.bind(this);
  }

  middleware(store) {
    this.store = store;
    return this.muxer.bind(this);
  }

  /**
   * Override this function.
   */
  muxer() {
    next => action => {
      return next(action);
    }
  }
}
