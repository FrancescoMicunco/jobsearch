import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'
import configureStore from '../src/redux/store'


ReactDOM.render( <
    React.StrictMode >
    <
    Provider store = { configureStore } >
    <
    App / >
    <
    /Provider> < /
    React.StrictMode > ,
    document.getElementById('root')
);