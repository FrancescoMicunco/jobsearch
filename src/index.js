import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'
import { configureStore, persistor } from '../src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render( < React.StrictMode >
    <
    Provider store = { configureStore } >
    <
    PersistGate persistor = { persistor } >
    <
    App / >
    <
    /Provider>  </PersistGate > <
    /
    React.StrictMode > ,
    document.getElementById('root')
);