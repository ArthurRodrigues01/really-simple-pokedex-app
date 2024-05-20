import { NoDecorationLink } from "../main-components"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonChainLinkLoadingFeedback ({ id }: { id: number }) {
  return (
      <NoDecorationLink to={`/pokemon/${id}`}>
        <div> 
          <RotatingPokeballFeedback pokemonId={id} width={175} height={175}/>
        </div>
      </NoDecorationLink>
  )
}

export default PokemonChainLinkLoadingFeedback