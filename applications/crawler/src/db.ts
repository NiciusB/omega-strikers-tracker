import assert from "assert"
import { MongoClient } from "mongodb"

assert(process.env.mongoDbUri)

const client = new MongoClient(process.env.mongoDbUri)

export const connectPromise = client.connect()

const db = client.db()
export default db

export const dbCollections = {
  players: db.collection("Players"),
  crawlProgress: db.collection("CrawlProgress"),
}
