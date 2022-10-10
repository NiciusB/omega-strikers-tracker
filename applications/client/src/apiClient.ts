const API_URI = import.meta.env.DEV
  ? "http://localhost:1780/graphql"
  : "/graphql"

import { GraphQLClient } from "graphql-request"

export default new GraphQLClient(API_URI)
