import React from 'react'
import { hot } from 'react-hot-loader/root'

import { useQuery } from '@apollo/client'
import rickandmortyClient from '@@services/clients/rickandmorty'
import RICKS from '@@services/queries/ricks'

import styled from '@emotion/styled'
import { Media, LayoutItem, Layout, Heading, Typo } from '@@components'
import Card from '@@components/organisms/Card'

const SectionHead = styled.section`
  margin-top: 48px;
`

const Team = () => {
  const { loading, error, data } = useQuery(RICKS, {
    client: rickandmortyClient,
  })

  const allCharacters = data?.characters?.results

  return (
    <>
      <Layout as={SectionHead} flexDirection="column">
        <Heading variant="underlined" title="Team" />
        <Typo center>
          {`My man! Hello Jerry, come to rub my face in urine again? I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month's Victoria's Secret?! Ohh, fuck!`}
        </Typo>
      </Layout>
      <Layout as={SectionHead} justifyContent="space-between" wrap="wrap">
        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data &&
          allCharacters.map((character) => (
            <LayoutItem key={character.name} division={4}>
              <Card
                icon={
                  <Media src={character.image} alt={character.name} rounded />
                }
                title={character.name}
                body={
                  <Typo>
                    <div>{character.species}</div>
                    <div>{character.origin.name}</div>
                  </Typo>
                }
              />
            </LayoutItem>
          ))}
      </Layout>
    </>
  )
}

export default hot(Team)
