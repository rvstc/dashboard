import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-card/dist/card.css';
import '@material/react-material-icon/dist/material-icon.css';


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
