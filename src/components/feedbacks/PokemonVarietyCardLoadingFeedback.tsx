import { CenteredFlexCol, Title } from "../main-components"
import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonVarietyCardLoadingFeedback({ name }: { name: string }) {
  return ( 
    <HoverableGrowthFeedback>
      <CenteredFlexCol $gap="1rem"> 
        <RotatingPokeballFeedback pokemonId={name} width={175} height={175}/>
        <Title $color="#fff">{name}</Title>
      </CenteredFlexCol>
    </HoverableGrowthFeedback>
   )
}

export default PokemonVarietyCardLoadingFeedback