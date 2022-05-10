import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { FirebaseContextProvider } from './store/firebase-context';
import './index.scss';

ReactDOM.render(
  <FirebaseContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FirebaseContextProvider>,
  document.getElementById('root')
);
