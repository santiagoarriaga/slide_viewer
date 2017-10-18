import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Modules from './components/modules/Modules'
import Slides from './components/slides/Slides'

import { reducers } from './reducers'
import { sagas } from './sagas'

import './stylesheets/main.scss'

const sagaMiddleware = createSagaMiddleware()
let middleware = applyMiddleware( sagaMiddleware )

if( process.env.NODE_ENV != 'production' )
  middleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const cloned = Object.assign( {}, course ) // global course may change, clone it for state
const initial = { view: 'modules', course: cloned } // initial drawing state

const store = createStore( reducers, initial, middleware )

sagaMiddleware.run( sagas )

ReactDOM.render
(
  <Provider store={store}>
    <div id="container" className="container-fluid">
      <Modules/>
      <Slides/>
    </div>
  </Provider>
  ,
  document.getElementById( "app" )
)
