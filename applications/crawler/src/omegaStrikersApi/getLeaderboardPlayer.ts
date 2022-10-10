import { fetchOmegaStrikersApi } from "./"
import { GetRankedLeaderboardPlayersResult } from "./getRankedLeaderboardPlayers"

interface RequestOptions {
  username: string
}

export async function getLeaderboardPlayer(
  options: RequestOptions
): Promise<GetRankedLeaderboardPlayersResult.Player> {
  const searchParams: Record<string, string> = {
    username: options.username,
  }

  return await fetchOmegaStrikersApi(
    "TODO?" + new URLSearchParams(searchParams)
  )
}
