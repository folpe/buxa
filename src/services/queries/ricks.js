import { gql } from '@apollo/client'

const RICKS = gql`
  query GetSomeRicks {
    characters(filter: { name: "Rick" }, page: 1) {
      results {
        name
        species
        image
        origin {
          name
        }
      }
    }
  }
`

export default RICKS
