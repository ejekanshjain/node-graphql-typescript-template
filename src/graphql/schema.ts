import { gql } from 'apollo-server'

const typeDefs = gql`
    type Hello {
        message: String!
    }

    type Query {
        hello: Hello
    }
`

export default typeDefs
