import RotatingPokeballFeedback from "./RotatingPokeballFeedback"
import { PokemonImageWrapper } from '../main-poke-components'

function PokemonCardLoadingFeedback({ id }: {id: number}) {
  return (
    <div>
      <PokemonImageWrapper>
        <RotatingPokeballFeedback pokemonId={id}/>
      </PokemonImageWrapper>
      <h1>Loading...</h1>
    </div>
  )
}

export default PokemonCardLoadingFeedback