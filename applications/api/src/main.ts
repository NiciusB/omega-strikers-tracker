import express from "express"
import cors from "cors"
import { graphqlHTTP } from "express-graphql"
import graphQLRootValue from "./graphQLRootValue"
import graphQLSchema from "./graphQLSchema"

export default async function main() {
  const app = express()
  app.use(cors())
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: graphQLSchema,
      rootValue: graphQLRootValue,
      graphiql: true,
    })
  )
  app.listen(80)
  console.log("Running a GraphQL API server at http://localhost:1780/graphql")
}
