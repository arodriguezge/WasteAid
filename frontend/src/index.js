import React from "react"
import ReactDOM from 'react-dom'
import Root from './components/Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'
 
import 'bootstrap/dist/css/bootstrap.min.css'

import 'font-awesome/css/font-awesome.css'
import './css/style.css'

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
    , document.querySelector("#main"))