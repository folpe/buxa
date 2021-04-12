import { install as installOfflineHandling } from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'

import App from './App'

installOfflineHandling()

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
