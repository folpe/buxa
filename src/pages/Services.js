import React from 'react'
import { hot } from 'react-hot-loader/root'

import styled from '@emotion/styled'

import { Typo, Heading, Layout } from '@@components'

const SectionHead = styled.section`
  margin-top: 48px;
`

const Services = () => {
  return (
    <>
      <Layout as={SectionHead} flexDirection="column">
        <Heading variant="underlined" title="Services" />
        <Typo center>
          Start craft digital, graphic and dimensional thinking, to create
          category leading brand experiences that have meaning and add a value
          for your clients.
        </Typo>
      </Layout>
    </>
  )
}

export default hot(Services)
