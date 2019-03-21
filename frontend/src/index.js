import React from "react"
import ReactDOM from 'react-dom'
import Router from './components/Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'font-awesome/css/font-awesome.css'
import './css/style.css'

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
    , document.querySelector("#main"))