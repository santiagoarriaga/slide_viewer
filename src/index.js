import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Modules from './components/modules/Modules'

import { reducers } from './reducers.js'

import './stylesheets/main.scss'

const initial = { view: 'modules', course } // initial drawing state

const store = createStore
(
  reducers,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render
(
  <Provider store={store}>
    <div id="container" className="container">
      <Modules/>
    </div>
  </Provider>
  ,
  document.getElementById( "app" )
)
