import React from "react"
import { render } from "react-dom"
import Router from './components/Router'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'font-awesome/css/font-awesome.css'
import './css/style.css'


render(<Router />, document.querySelector("#main"))