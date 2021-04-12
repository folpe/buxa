import { ApolloClient, InMemoryCache } from '@apollo/client'

const rickandmortyClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export default rickandmortyClient
