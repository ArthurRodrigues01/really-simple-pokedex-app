import useImagePreloader from "../hooks/useImagePreloader"
import useSinglePokemonData from "../hooks/useSinglePokemonData"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import PokemonChainLinkLoadingFeedback from "./feedbacks/PokemonChainLinkLoadingFeedback"
import { NoDecorationLink } from "./main-components"
import { PokemonSpriteChainLink, PokemonSpriteWrapperChainLink } from "./styles"

function PokemonChainLink({ id }: { id: number }) {
  const { data, isLoading } = useSinglePokemonData(id)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')

  if (data === null || hasLoaded === false || isLoading) {
    return (
      <PokemonChainLinkLoadingFeedback id={id}/>
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