import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './containers/App';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}> 
	  	<App />
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
