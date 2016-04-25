import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'
import Landing from './components/landing'
import Example from './components/example'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
    <Route path='example' component={Example}/>
  </Route>
)
