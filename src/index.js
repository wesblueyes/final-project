import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Location from './components/Location'
import Listing from './components/Listing'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
  <Route path='/' component={App}/>
  <Route path='/listing' component={Listing}/>
  <Route path='/location/:Slug' component={Location}/>
  </Router>

), document.getElementById('root'))
