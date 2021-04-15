import React, { useCallback, useEffect, useMemo } from 'react'
import Header from '@@components/organisms/Header'
import { node } from '@@helpers/prop-types'
import { hot } from 'react-hot-loader/root'
import { useGsapTl } from '@@helpers/gsap'
import { Route, Switch, useHistory } from 'react-router'
import Dash from '@@pages/Dash'
import Team from '@@pages/Team'
import Services from '@@pages/Services'

const SimpleTemplate = ({ children }) => {
  const history = useHistory()

  const navigateTo = useCallback((url) => history.push(url), [history])

  const headerOptions = useMemo(
    () => ({
      y: '-1vh',
      opacity: 1,
      delay: 0.2,
      duration: 1,
      ease: 'elastic.out(1,1)',
      onReverseComplete: () => navigateTo('/'),
    }),
    [navigateTo]
  )
  const mainOptions = useMemo(
    () => ({
      y: '-1vh',
      opacity: 0,
      delay: 0.2,
      duration: 1,
      ease: 'elastic.out(1,1)',
    }),
    []
  )
  const [headerRef, headerTl] = useGsapTl(headerOptions)
  const [mainRef, mainTl] = useGsapTl(mainOptions)

  useEffect(() => {
    headerTl.play()
  }, [headerTl])

  const disconnectClickHandler = () => {
    mainTl.play()
    headerTl.reverse()
  }

  return (
    <>
      <Header forwardRef={headerRef} disconnectCB={disconnectClickHandler} />
      <main ref={mainRef}>
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/dash" component={Dash} />
          <Route path="/services" component={Services} />
        </Switch>
      </main>
    </>
  )
}

SimpleTemplate.propTypes = {
  children: node.isRequired,
}

export default hot(SimpleTemplate)
