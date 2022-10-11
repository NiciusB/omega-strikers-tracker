export default function characterIdToName(characterId: string) {
  switch (characterId) {
    case "CD_StalwartProtector":
      return "Dubu"
    case "CD_SpeedySkirmisher":
      return "Kai"
    case "CD_TempoSniper":
      return "Estelle"
    case "CD_EmpoweringEnchanter":
      return "Era"
    case "CD_FlexibleBrawler":
      return "Juliette"
    case "CD_AngelicSupport":
      return "Atlas"
    case "CD_NimbleBlaster":
      return "Drekar"
    case "CD_CleverSummoner":
      return "Juno"
    case "CD_ChaoticRocketeer":
      return "Luna"
    case "CD_ShieldUser":
      return "Asher"
    case "CD_MagicalPlaymaker":
      return "AiMi"
    case "CD_HulkingBeast":
      return "X"
    default:
      return characterId
  }
}
