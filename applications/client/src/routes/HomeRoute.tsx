import { gql } from "graphql-request"
import { createSignal, onMount } from "solid-js"
import apiClient from "../apiClient"
import TopCharacter from "../components/TopCharacter"
import styles from "./RomeRoute.module.css"

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
    wins: number
    losses: number
    rating: number
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
        rank
        wins
        losses
        topRole
        rating
        mostPlayedCharacters {
          characterId
          gamesPlayed
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

      const parsedResult: { [key: string]: QueryResult.Player } = {}

      res.players.forEach((player) => {
        if (parsedResult[player.rankedLeaderboardData.rank] === undefined) {
          parsedResult[player.rankedLeaderboardData.rank] = player
        } else if (
          // Use latest updated
          parsedResult[player.rankedLeaderboardData.rank].updatedAt <
          player.updatedAt
        ) {
          parsedResult[player.rankedLeaderboardData.rank] = player
        }
      })

      setLeaderboardResult(
        Object.values(parsedResult).sort((a, b) =>
          a.rankedLeaderboardData.rank > b.rankedLeaderboardData.rank ? 1 : -1
        )
      )
    } catch (error) {
      setError(error)
    }
  })

  return (
    <>
      <h1>Omega Strikers Global Leaderboard</h1>

      {error !== null && error}

      {leaderboardResult() === null && "Loading..."}

      {leaderboardResult()?.length === 0 && "No data found"}

      <table class={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Rating</th>
            <th>Winrate</th>
            <th>Top Role</th>
            <th>Top Characters</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardResult()?.map((user) => {
            const mostPlayed =
              user.rankedLeaderboardData.mostPlayedCharacters.slice(0, 2)
            return (
              <tr>
                <td>{user.rankedLeaderboardData.rank}</td>
                <td>{user.rankedLeaderboardData.username}</td>
                <td>{user.rankedLeaderboardData.rating}</td>
                <td>
                  <p>
                    {user.rankedLeaderboardData.wins} /{" "}
                    {user.rankedLeaderboardData.losses}
                  </p>
                  <p>
                    {Math.round(
                      (user.rankedLeaderboardData.wins /
                        (user.rankedLeaderboardData.losses +
                          user.rankedLeaderboardData.wins)) *
                        100
                    )}
                    %
                  </p>
                </td>
                <td>{user.rankedLeaderboardData.topRole}</td>
                <td>
                  {mostPlayed.map((mp) => (
                    <TopCharacter
                      characterId={mp.characterId}
                      gamesPlayed={mp.gamesPlayed}
                    />
                  ))}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
