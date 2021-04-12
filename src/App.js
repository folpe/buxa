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
import About from '@@pages/About'
import Team from '@@pages/Team'
import Services from '@@pages/Services'

const GlobalStyles = () => {
  const theme = useTheme()
  return <Global styles={makeGlobalStyles(theme)} />
}

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <SimpleTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/services" component={Services} />
          </Switch>
        </SimpleTemplate>
      </Router>
    </ThemeProvider>
  </Provider>
)

export default hot(App)
