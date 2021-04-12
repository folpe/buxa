import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import localForage from 'localforage'
import { compose, createStore } from 'redux'

import reactBaseReduce from './reducers'

const reduxOfflineConfig = {
  ...offlineConfig,
  persistOptions: {
    storage: localForage,
  },
}

const enhancer = compose(
  offline(reduxOfflineConfig),
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x
)

const store = createStore(reactBaseReduce, {}, enhancer)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextGTR = require('./reducers').default
    store.replaceReducer(nextGTR)
  })
}

export default store
