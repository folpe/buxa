import React, { useCallback, useEffect, useMemo } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import { useHistory } from 'react-router'

import { Typo, Button, Heading, Layout, Media } from '@@components'

import login from '@@assets/images/login.svg'
import { useGsapTl } from '@@helpers/gsap'
import { Power3 } from 'gsap'

const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .home_media {
    opacity: 0;
  }
  .home_connection {
    transform: translate(100vw, 0px);
    opacity: 0;
    background-image: -webkit-linear-gradient(
      -10deg,
      #fff 20%,
      rgba(81, 45, 168, 0.9) 20.1%
    );
    flex: 0 0 60%;
  }
`

const Home = () => {
  const history = useHistory()

  const navigateTo = useCallback(
    (url) => {
      history.push(url)
    },
    [history]
  )

  const loginOptions = useMemo(
    () => ({
      x: '5vw',
      opacity: 1,
      delay: 0.2,
      duration: 1.2,
      ease: 'elastic.out(1,1)',
      onReverseComplete: () => navigateTo('/dash'),
    }),
    [navigateTo]
  )
  const mediaOptions = useMemo(
    () => ({
      opacity: 1,
      duration: 1,
      ease: Power3.in,
    }),
    []
  )

  const [loginRef, loginTl] = useGsapTl(loginOptions)
  const [mediaRef, mediaTl] = useGsapTl(mediaOptions)

  useEffect(() => {
    loginTl.play()
    mediaTl.play()
  }, [loginTl, mediaTl])

  const onSubmit = (e) => {
    e.preventDefault()
    loginTl.reverse()
    mediaTl.reverse()
  }

  return (
    <HomeContainer>
      <Layout
        alignItems="center"
        justifyContent="center"
        className="home_media"
        forwardRef={mediaRef}
      >
        <Media src={login} alt="login" />
      </Layout>
      <Layout
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="home_connection"
        forwardRef={loginRef}
      >
        <Heading as="h1" title="Login"></Heading>
        <Typo>Scannez votre badge</Typo>
        <Typo>OU</Typo>
        <Typo>Connectez-vous</Typo>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Mot de passe" />

          <Button type="submit" color="primary">
            Valider
          </Button>
        </form>
      </Layout>
    </HomeContainer>
  )
}

export default hot(Home)
