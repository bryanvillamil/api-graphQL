import express from 'express'
import cors from 'cors'
import gqlMiddleware from 'express-graphql'
import { schema as typeDefs } from './lib/schema'
import { resolvers } from './lib/resolvers/index'
import { makeExecutableSchema } from 'graphql-tools'

const PORT = process.env.PORT || 3000

const app = express()

const schema = makeExecutableSchema({ typeDefs, resolvers })



app.get('/', (req, res) => {
  res.send('Page Home');
})

app.use(cors())

app.use('/graphql', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Connected in Port ${PORT}`)
})