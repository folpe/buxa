import React from 'react'
import Header from '@@components/organisms/Header'
import { Wrapper } from '@@components'
import { node } from '@@helpers/prop-types'
import Footer from '@@components/organisms/Footer'
import { hot } from 'react-hot-loader/root'

const SimpleTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer />
    </>
  )
}

SimpleTemplate.propTypes = {
  children: node.isRequired,
}

export default hot(SimpleTemplate)
