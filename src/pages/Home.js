import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Typo, Layout, LayoutItem, Heading, Icon, Card } from '@@components'

import styled from '@emotion/styled'

import { useTheme } from 'emotion-theming'

const SectionHome = styled.section`
  margin-top: 48px;
`

const SectionHead = styled.section`
  margin-top: 48px;
`

const Home = () => {
  const theme = useTheme()

  const StarIcon = (
    <Icon
      icon="star"
      viewBox="0 0 511.997 511.997"
      width={32}
      fill={theme.palette.secondary.main}
    />
  )

  const MonitorIcon = (
    <Icon
      icon="monitor"
      viewBox="0 0 511.997 511.997"
      width={32}
      fill={theme.palette.secondary.main}
    />
  )

  const IdeaIcon = (
    <Icon
      icon="idea"
      viewBox="0 0 511.997 511.997"
      width={32}
      fill={theme.palette.secondary.main}
    />
  )

  return (
    <>
      <Layout as={SectionHead} flexDirection="column">
        <Heading variant="underlined" title="Welcome" />
        <Typo center>
          Start craft digital, graphic and dimensional thinking, to create
          category leading brand experiences that have meaning and add a value
          for your clients.
        </Typo>
      </Layout>
      <Layout as={SectionHome} justifyContent="space-between" wrap="wrap">
        <LayoutItem division={3}>
          <Card
            icon={StarIcon}
            title="Star-Lord"
            body={
              <Typo>
                The Federales found a room full of bodies. Looks like a bunch of
                cartel guys.
              </Typo>
            }
          />
        </LayoutItem>
        <LayoutItem division={3}>
          <Card
            icon={MonitorIcon}
            title="Iron Man"
            body={
              <Typo>
                {`Why would, why would I be scared of that guy? Anyone else here
                killed that guy? Nope.`}
              </Typo>
            }
          />
        </LayoutItem>
        <LayoutItem division={3}>
          <Card
            icon={IdeaIcon}
            title="Mantis"
            body={
              <Typo>{`Didn't think so. Korg, why don't you, tell everybody who chopped
                Thanos' big head off.`}</Typo>
            }
          />
        </LayoutItem>

        <LayoutItem division={3}>
          <Card
            icon={MonitorIcon}
            title="Ant Man"
            body={
              <Typo>
                We just, wait around for this Quill guy to show up, and then he
                leads us to the Power Stone, is that it?
              </Typo>
            }
          />
        </LayoutItem>
        <LayoutItem division={3}>
          <Card
            icon={IdeaIcon}
            title="Doctor Strange"
            body={
              <Typo>{`If it wasn't for the existential terror of staring into a void of space, I'd say I'm feeling better today`}</Typo>
            }
          />
        </LayoutItem>
        <LayoutItem division={3}>
          <Card
            icon={StarIcon}
            title="Thanos"
            body={
              <Typo>{`The infection's run its course, Thanks to the blue meanie back there. World governments are in pieces.`}</Typo>
            }
          />
        </LayoutItem>
      </Layout>
    </>
  )
}

export default hot(Home)
