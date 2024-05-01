import { PokemonSpriteWrapper } from '../main-poke-components'
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonCardLoadingFeedback({ id }: {id: number}) {
  return (
    <div>
      <PokemonSpriteWrapper>
        <RotatingPokeballFeedback pokemonId={id}/>
      </PokemonSpriteWrapper>
      <h1>Loading...</h1>
    </div>
  )
}

export default PokemonCardLoadingFeedback