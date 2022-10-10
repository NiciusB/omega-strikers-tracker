import { gql } from "graphql-request"
import { createSignal, onMount } from "solid-js"
import apiClient from "../apiClient"

namespace QueryResult {
  export interface Player {
    createdAt: string
    updatedAt: String
    rankedLeaderboardData: RankedLeaderboardData
  }
  interface RankedLeaderboardData {
    username: string
    rank: string
    mostPlayedCharacters: MostPlayedCharacters[]
    topRole: string
  }
  interface MostPlayedCharacters {
    characterId: string
    gamesPlayed: number
  }

  export interface Result {
    players: Player[]
  }
}

const query = gql`
  {
    players {
      rankedLeaderboardData {
        username
        playerId
        logoId
        title
        nameplateId
        emoticonId
        titleId
        rank
        wins
        losses
        games
        topRole
        rating
        currentDivisionId
        progressToNext
        mostPlayedCharacters {
          characterId
          gamesPlayed
        }
        tags
        organization {
          organizationId
          logoId
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`

export default function HomeRoute() {
  const [leaderboardResult, setLeaderboardResult] = createSignal<
    null | QueryResult.Player[]
  >(null)
  const [error, setError] = createSignal<unknown | null>(null)

  onMount(async () => {
    try {
      const res = await apiClient.request<QueryResult.Result>(query)

      setLeaderboardResult(
        res.players.sort((a, b) =>
          a.rankedLeaderboardData.rank > b.rankedLeaderboardData.rank ? 1 : -1
        )
      )
    } catch (error) {
      setError(error)
    }
  })

  return (
    <>
      <h1>Omega Strikers Tracker</h1>

      {error !== null && error}

      {leaderboardResult() === null && "Loading..."}

      {leaderboardResult()?.length === 0 && "No data found"}

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Rank</th>
            <th>Top Role</th>
            <th>Top Character</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardResult()?.map((user) => (
            <tr>
              <td>{user.rankedLeaderboardData.username}</td>
              <td>{user.rankedLeaderboardData.rank}</td>
              <td>{user.rankedLeaderboardData.topRole}</td>
              <td>
                {
                  user.rankedLeaderboardData.mostPlayedCharacters?.[0]
                    ?.characterId
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
