import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'react-datepicker/dist/react-datepicker.css'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
