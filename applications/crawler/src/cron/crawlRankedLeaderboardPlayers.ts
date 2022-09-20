import omegaStrikersApi from "../omegaStrikersApi"
import { dbCollections } from "../db"
import { RANKED_LEADERBOARD_PLAYERS_TOTAL_ITEMS } from "../omegaStrikersApi/getRankedLeaderboardPlayers"

const PAGE_SIZE = 25
const TOTAL_PAGES = Math.ceil(
  RANKED_LEADERBOARD_PLAYERS_TOTAL_ITEMS / PAGE_SIZE
)

export default async function crawlRankedLeaderboardPlayers() {
  const page = await getCrawlProgressNextPage()
  console.debug(
    `[crawlRankedLeaderboardPlayers] Loading page ${page}/${TOTAL_PAGES}`
  )

  const result = await omegaStrikersApi.getRankedLeaderboardPlayers({
    pageSize: PAGE_SIZE,
    startRank: page * PAGE_SIZE,
  })

  await Promise.all(
    result.players.map(async (player) => {
      await dbCollections.players.updateOne(
        {
          playerId: player.playerId,
        },
        {
          $set: {
            updatedAt: new Date(),
            rankedLeaderboardData: player,
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      )
    })
  )

  await updateCrawlProgressPage(page)

  console.debug(`[crawlRankedLeaderboardPlayers] All done page ${page}!`)
}

async function getCrawlProgressNextPage() {
  const progress = await dbCollections.crawlProgress.findOne({
    type: "rankedLeaderboardPlayers",
  })
  if (progress) {
    return (progress.lastPage % TOTAL_PAGES) + 1
  } else {
    return 1
  }
}

async function updateCrawlProgressPage(newPage: number) {
  await dbCollections.crawlProgress.updateOne(
    { type: "rankedLeaderboardPlayers" },
    { $set: { lastPage: newPage } },
    { upsert: true }
  )
}
