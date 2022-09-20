import { getRankedLeaderboardPlayers } from "./getRankedLeaderboardPlayers"

export const API_BASE_URL = "https://prometheus.odysseyinteractive.gg/api/v1/"

export enum OMEGA_STRIKERS_REGIONS {
  ASIA = "Asia",
  NORTH_AMERICA = "NorthAmerica",
  SOUTH_AMERICA = "SouthAmerica",
  EUROPE = "Europe",
}

const omegaStrikersApi = {
  getRankedLeaderboardPlayers,
}
export default omegaStrikersApi

export async function fetchOmegaStrikersApi(uri: string) {
  return await fetch(API_BASE_URL + uri, {
    headers: {
      Accept: "application/json",
      "User-Agent":
        "omega-strikers-tracker/1.0 (https://github.com/NiciusB/omega-strikers-tracker)",
    },
  }).then((res) => res.json())
}
