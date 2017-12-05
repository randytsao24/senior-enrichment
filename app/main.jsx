'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Campuses from './components/Campuses';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

render (
  <Provider store={store}>
    <div>
    	<MuiThemeProvider>
	    	<AppBar />
	    </MuiThemeProvider>
	    <Campuses />
    </div>
  </Provider>,
  document.getElementById('main')
)