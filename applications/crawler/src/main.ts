import { dbCollections } from "./db"
import cron from "node-cron"
import crawlRankedLeaderboardPlayers from "./cron/crawlRankedLeaderboardPlayers"
import httpServer from "./httpServer"

export default async function main() {
  await ensurePlayersIndexes()

  await httpServer()

  cron.schedule("23 * * * * *", crawlRankedLeaderboardPlayers)
}

async function ensurePlayersIndexes() {
  await dbCollections.players.createIndex({ playerId: 1 })
  await dbCollections.players.createIndex({ updatedAt: 1 })
}
