import { CenteredFlexCol, NoDecorationLink, Title } from "../main-components"
import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonVarietyCardLoadingFeedback({ id, name }: { id: number, name: string }) {
  return ( 
    <HoverableGrowthFeedback>
      <NoDecorationLink to={`/pokemon/${id}`}>
        <CenteredFlexCol $gap="1rem"> 
          <RotatingPokeballFeedback pokemonId={name} width={175} height={175}/>
          <Title $color="#fff">{name}</Title>
        </CenteredFlexCol>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
   )
}

export default PokemonVarietyCardLoadingFeedback