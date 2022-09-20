import { buildSchema } from "graphql"

/*
  https://transform.tools/json-to-graphql
*/

export default buildSchema(`
type MostPlayedCharacters {
  characterId: String
  gamesPlayed: Int
}

type Organization {
  organizationId: String
  logoId: String
  name: String
}

type RankedLeaderboardData {
  username: String
  playerId: String
  logoId: String
  title: String
  nameplateId: String
  emoticonId: String
  titleId: String
  rank: Int
  wins: Int
  losses: Int
  games: Int
  topRole: String
  rating: Int
  currentDivisionId: String
  progressToNext: Int
  mostPlayedCharacters: [MostPlayedCharacters]
  organization: Organization
  tags: [String]
}

type Player {
  createdAt: String
  updatedAt: String
  rankedLeaderboardData: RankedLeaderboardData
}

type Query {
  players: [Player]
  player(playerId: String, username: String): Player
}
`)
