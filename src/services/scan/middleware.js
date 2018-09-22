import { logUser } from 'services/user/actions';


const INPUT_WINDOW = 1000 /* milliseconds */;


export default class ScanMiddleware {

  constructor() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    return store => {
      this.store = store;
      return this.muxer();
    };
  }

  muxer() {
    return next => action => {
      return next(action);
    };
  }

  /**
   * Determines whether a KEY_DOWN event marks the beginning of user id based
   * on details of the KEY_DOWN event in {@code event}.
   */
  shouldListen(event) {
    return event.key === 'k' && event.altKey;
  }

  /**
   * Handles KEY_DOWN actions. If a key press of ALT+k is detected, then the
   * numeric inputs that follow within the {@code INPUT_WINDOW} are assumed to be
   * a user id.
   */
  handleKeyDown(event) {
    if (!this.listen  && this.shouldListen(event)) {
      this.id = 0;
      this.listen = true;
      setTimeout(() => {
        this.listen = false;
        this.store.dispatch(logUser(this.id));
      }, INPUT_WINDOW);
    } else if (this.listen) {
      const i = parseInt(event.key, 10);
      if (i) {
        this.id = this.id * 10 + i;
      }
    }
  }
}
