import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonVarietyCardLoadingFeedback({ name }: { name: string }) {
  return ( 
    <HoverableGrowthFeedback>
      <RotatingPokeballFeedback pokemonId={name}/>
    </HoverableGrowthFeedback>
   )
}

export default PokemonVarietyCardLoadingFeedback