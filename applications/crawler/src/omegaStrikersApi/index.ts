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
