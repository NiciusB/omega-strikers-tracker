import characterIdToAvatarUrl from "../characterIdToAvatarUrl"
import characterIdToName from "../characterIdToName"
import styles from "./TopCharacter.module.css"

export default function TopCharacter({
  characterId,
  gamesPlayed,
}: {
  characterId: string
  gamesPlayed: number
}) {
  return (
    <div class={styles.container}>
      <img
        class={styles.characterAvatarImg}
        src={characterIdToAvatarUrl(characterId)}
      />

      <div class={styles.textContainer}>
        <p>{characterIdToName(characterId)}</p>
        <p>{gamesPlayed} games</p>
      </div>
    </div>
  )
}
