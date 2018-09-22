import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
