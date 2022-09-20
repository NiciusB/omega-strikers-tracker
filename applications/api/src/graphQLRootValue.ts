import { dbCollections } from "./db"

const graphQLRootValue = {
  players: async (args: {}) => {
    const players = await dbCollections.players.find()

    return players.toArray()
  },
  player: async (args: {
    playerId: string | undefined
    username: string | undefined
  }) => {
    if (args.playerId) {
      const player = await dbCollections.players.findOne({
        "rankedLeaderboardData.playerId": args.playerId,
      })

      return player
    } else {
      const player = await dbCollections.players.findOne({
        "rankedLeaderboardData.username": args.username,
      })

      return player
    }
  },
}

export default graphQLRootValue
