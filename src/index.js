import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Location from './components/Location'
import Listing from './components/Listing'
import { Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
  <Route component={App}>
    <Route path='/' component={Listing} />
    <Route path='/location/:Slug' component={Location} />
  </Route>
  </Router>

), document.getElementById('root'))
