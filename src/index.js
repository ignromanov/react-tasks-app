import 'bootstrap/dist/css/bootstrap.css'
import React        from 'react'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import configureStore    from './init'
import { MainTasksList } from './pages'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MainTasksList/>
  </Provider>,
  document.getElementById( 'root' ),
)

if( module.hot ) {
  module.hot.accept( './pages', () => {
    ReactDOM.render(
      <Provider store={store}>
        <MainTasksList/>
      </Provider>,
      document.getElementById( 'root' ),
    )
  } )
}
