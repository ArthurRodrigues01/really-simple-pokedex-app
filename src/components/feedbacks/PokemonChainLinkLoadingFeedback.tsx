import { NoDecorationLink } from "../main-components"
import RotatingPokeballFeedbackChainLink from "./RotatingPokeballFeedbackChainLink"

function PokemonChainLinkLoadingFeedback ({ id }: { id: number }) {
  return (
    <NoDecorationLink to={`/pokemon/${id}`}>
      <RotatingPokeballFeedbackChainLink pokemonId={id}/>
    </NoDecorationLink>
  )
}

export default PokemonChainLinkLoadingFeedback