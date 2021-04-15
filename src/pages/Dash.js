import React, { useEffect, useMemo } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import { Typo, Heading, Layout } from '@@components'
import { useHistory } from 'react-router'
import { useGsapTl } from '@@helpers/gsap'

const SectionHead = styled.section`
  margin-top: 48px;
  transform: translate(0, -20px);
  opacity: 0;
`

const Dash = () => {
  const history = useHistory()

  const dashOptions = useMemo(
    () => ({
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 1,
      onReverseComplete: () => history.push('/team'),
    }),
    [history]
  )

  const [dashRef, dashTl] = useGsapTl(dashOptions)

  const onClickHandler = () => {
    dashTl.reverse()
  }

  useEffect(() => {
    dashTl.play()
  }, [dashTl])
  return (
    <>
      <Layout
        as={SectionHead}
        flexDirection="column"
        className="dash_heading"
        forwardRef={dashRef}
      >
        <Heading variant="underlined" title="Dash" />
        <Typo center>
          Start craft digital, graphic and dimensional thinking, to create
          category leading brand experiences that have meaning and add a value
          for your clients.
        </Typo>
      </Layout>
      <button onClick={onClickHandler}>Team</button>
    </>
  )
}

export default hot(Dash)
