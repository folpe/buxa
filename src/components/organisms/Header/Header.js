import React from 'react'
import { hot } from 'react-hot-loader/root'

import { HeaderBase } from './header.css'
import { Button, Icon, Layout, Typo } from '@@components'
import { any, func } from '@@helpers/prop-types'

import { user } from '@@services/mocks/user'

const Header = ({ forwardRef, disconnectCB }) => {
  const clickHandler = () => {
    disconnectCB()
  }

  const { firstname, lastname } = user

  return (
    <HeaderBase ref={forwardRef}>
      <Layout
        alignItems="center"
        justifyContent="flex-end"
        className="u-fullHeight"
      >
        <Typo className="header_user">
          {firstname} {lastname}
        </Typo>
        <Button variant="naked" onClick={clickHandler} className="header_logo">
          <Icon icon="power" fill="white" viewBox="0 0 24 24"></Icon>
        </Button>
      </Layout>
    </HeaderBase>
  )
}

Header.propTypes = {
  forwardRef: any,
  disconnectCB: func,
}

export default hot(Header)
