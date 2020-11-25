import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from 'views/Root/Root'

import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
