import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
/* to create store, have to import from redux module; curly braces because we are only using 1 function/var from it*/
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';

/* Creating a store */
const store = createStore(allReducers); //creates a redux store for all your reducers

ReactDOM.render( 
    /*need a provider to pass data from store to component */
    /*every component will have access to all store data*/
   <Provider store = {store}>
       <App />
       </Provider>, 
    document.getElementById('root')
);
