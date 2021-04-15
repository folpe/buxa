import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import appTheme from '@@theme/appTheme'
import makeGlobalStyles from '@@theme/styles/makeGlobalStyles'
import { Global } from '@emotion/core'
import { useTheme, ThemeProvider } from 'emotion-theming'

import store from './store'

import SimpleTemplate from '@@components/templates/SimpleTemplate'
import Home from '@@pages/Home'

const GlobalStyles = () => {
  const theme = useTheme()
  return <Global styles={makeGlobalStyles(theme)} />
}

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={SimpleTemplate} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

export default hot(App)
