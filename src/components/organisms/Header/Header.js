import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Link } from 'react-router-dom'
import { HeaderBase, Navigation, Logo } from './header.css'
import { ListItem, Media, Wrapper, List, Heading, Layout } from '@@components'

const menu = [
  { id: 'home', text: 'Home', link: '/' },
  { id: 'services', text: 'Services', link: '/services' },
  { id: 'team', text: 'Team', link: '/team' },
  { id: 'about', text: 'About', link: '/about' },
]

const Header = () => {
  return (
    <HeaderBase>
      <Wrapper className="u-fullHeight">
        <Layout
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="u-fullHeight"
        >
          <Layout as={Navigation} alignItems="center" justifyContent="center">
            <Logo>
              <Media src="src/assets/images/logo.png" alt="Logo"></Media>
            </Logo>
            <List>
              {menu.map((item) => (
                <ListItem
                  key={item.id}
                  component={Link}
                  to={item.link}
                  inline
                  className="darkMode"
                >
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Layout>
          <Layout
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className="u-fullHeight"
          >
            <Heading as="h1" title="Start building a new world with React" />
            <Heading
              as="h5"
              className="subtitle"
              color={`rgba(255,255,255,0.4)`}
              title="Lorem ipsum dolor sit amet"
            />
          </Layout>
        </Layout>
      </Wrapper>
    </HeaderBase>
  )
}

export default hot(Header)
