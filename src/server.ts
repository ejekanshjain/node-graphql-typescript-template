import { ApolloServer } from 'apollo-server'

import { NODE_ENV, PORT } from './config'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

server
    .listen(PORT)
    .then(({ port }) => {
        console.log(
            `${NODE_ENV === 'production' ? 'Production' : 'Development'} server started on ${port}`
        )
    })
