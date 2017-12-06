'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

render (
  <Provider store={store}>
  	<Router>
    	<Main />
    </Router>
  </Provider>,
  document.getElementById('main')
)