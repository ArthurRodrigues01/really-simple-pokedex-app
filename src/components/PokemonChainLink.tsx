import { useEffect, useState } from "react"

import { capitalize } from "../functions/other-functions"
import useImagePreloader from "../hooks/useImagePreloader"
import useOnScreen from "../hooks/useOnScreen"
import useSinglePokemonData from "../hooks/useSinglePokemonData"
import PokemonChainLinkLoadingFeedback from "./feedbacks/PokemonChainLinkLoadingFeedback"
import { NoDecorationLink, Title } from "./main-components"
import { PokemonSpriteChainLink } from "./styles"

function PokemonChainLink({ id, name }: { id: number, name: string }) {
  const { ref, isVisible } = useOnScreen()
  const [enabled, setEnabled] = useState(false)
  const { data, isLoading } = useSinglePokemonData(id, enabled)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')

  useEffect(() => {
    if (isVisible && data === null) {
      setEnabled(true)
    }
  }, [isVisible]);

  if (data === null || hasLoaded === false || isLoading) {
    return (
      <PokemonChainLinkLoadingFeedback ref={ref} name={name} id={id}/>
    )
  }
  return (
    <NoDecorationLink to={`/pokemon/${data.id}`}>
      <PokemonSpriteChainLink src={data.spriteSrc} alt={`Pokemon ${data.id}`}/>
      <Title color="#fff" style={{textWrap: 'nowrap'}}>{capitalize(data.name)}</Title>
    </NoDecorationLink>
  )
}

export default PokemonChainLink