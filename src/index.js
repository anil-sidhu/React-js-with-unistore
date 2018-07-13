import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from 'unistore'
import { Provider, connect } from 'unistore/react'
const initialState = {
    count: 0,
    list:[]

}
let store = createStore(initialState);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
 