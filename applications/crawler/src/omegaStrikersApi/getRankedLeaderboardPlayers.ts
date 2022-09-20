import { API_BASE_URL, OMEGA_STRIKERS_REGIONS } from "./"

export const RANKED_LEADERBOARD_PLAYERS_TOTAL_ITEMS = 10000

export async function getRankedLeaderboardPlayers(
  options: GetRankedLeaderboardPlayersResult.RequestOptions = {}
): Promise<GetRankedLeaderboardPlayersResult.Result> {
  const searchParams: Record<string, string> = {}

  if (options.startRank) {
    searchParams.startRank = options.startRank.toString()
  }
  if (options.pageSize) {
    searchParams.pageSize = options.pageSize.toString()
  }
  if (options.specificRegion) {
    searchParams.specificRegion = options.specificRegion
  }

  return await fetch(
    API_BASE_URL +
      "ranked/leaderboard/players?" +
      new URLSearchParams(searchParams)
  ).then((res) => res.json())
}

/*
  Generated with http://json2ts.com/
*/
export module GetRankedLeaderboardPlayersResult {
  export interface RequestOptions {
    startRank?: number
    pageSize?: number
    specificRegion?: OMEGA_STRIKERS_REGIONS
  }

  export interface Result {
    players: Player[]
    paging: Paging
    specificRegion: string
  }

  export interface Organization {
    organizationId: string
    logoId: string
    name: string
  }

  export interface MostPlayedCharacter {
    characterId: string
    gamesPlayed: number
  }

  export interface Player {
    username: string
    playerId: string
    logoId: string
    title: string
    nameplateId: string
    emoticonId: string
    titleId: string
    tags: string[]
    organization: Organization
    rank: number
    wins: number
    losses: number
    games: number
    topRole: string
    rating: number
    mostPlayedCharacters: MostPlayedCharacter[]
    currentDivisionId: string
    progressToNext: number
    socialUrl: string
  }

  export interface Paging {
    startRank: number
    pageSize: number
    specificRegion: string
    totalItems: number
  }
}
