import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import {history} from './store';

ReactDOM.render(

<Provider store = {store}>
   <ConnectedRouter history={history}>

    <App />

   </ConnectedRouter>
</Provider>


  , document.getElementById('root'));
registerServiceWorker();
