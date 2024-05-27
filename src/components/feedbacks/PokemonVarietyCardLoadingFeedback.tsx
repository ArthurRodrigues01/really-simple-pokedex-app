import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonVarietyCardLoadingFeedback({ name }: { name: string }) {
  return ( 
    <HoverableGrowthFeedback>
      <RotatingPokeballFeedback pokemonId={name} width={250} height={250}/>
    </HoverableGrowthFeedback>
   )
}

export default PokemonVarietyCardLoadingFeedback