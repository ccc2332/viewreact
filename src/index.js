import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ViewApp from './components/ViewApp';

import { Provider } from 'react-redux';
import { store } from './store';




ReactDOM.render(<Provider store={store}><div>Hello React!</div></Provider>, document.getElementById('root'));
