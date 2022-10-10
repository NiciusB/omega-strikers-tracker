const API_URI = "http://localhost:1780/graphql"
import { GraphQLClient } from "graphql-request"

export default new GraphQLClient(API_URI)
