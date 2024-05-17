import { useEffect, useState } from "react"

import useImagePreloader from "../hooks/useImagePreloader"
import useOnScreen from "../hooks/useOnScreen"
import useSinglePokemonData from "../hooks/useSinglePokemonData"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import PokemonChainLinkLoadingFeedback from "./feedbacks/PokemonChainLinkLoadingFeedback"
import { NoDecorationLink } from "./main-components"
import { PokemonSpriteChainLink, PokemonSpriteWrapperChainLink } from "./styles"

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
    <HoverableGrowthFeedback
      $borderRadius={999}
    >
      <NoDecorationLink to={`/pokemon/${data.id}`}>
        <PokemonSpriteWrapperChainLink>
          <PokemonSpriteChainLink src={data.spriteSrc} alt={`pokemon ${data.id}`}/>
        </PokemonSpriteWrapperChainLink>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonChainLink