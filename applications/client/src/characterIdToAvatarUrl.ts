export default function characterIdToAvatarUrl(characterId: string) {
  switch (characterId) {
    case "CD_StalwartProtector":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/dubu.png"
    case "CD_SpeedySkirmisher":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/kai.png"
    case "CD_TempoSniper":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/estelle.png"
    case "CD_EmpoweringEnchanter":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/era.png"
    case "CD_FlexibleBrawler":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/juliette.png"
    case "CD_AngelicSupport":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/atlas.png"
    case "CD_NimbleBlaster":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/drekar.png"
    case "CD_CleverSummoner":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/juno.png"
    case "CD_ChaoticRocketeer":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/luna.png"
    case "CD_ShieldUser":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/asher.png"
    case "CD_MagicalPlaymaker":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/aimi.png"
    case "CD_HulkingBeast":
      return "https://omega-strikers-static.s3.us-west-2.amazonaws.com/x.png"
    default:
      return characterId
  }
}
