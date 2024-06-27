import { CenteredFlexRow, Title } from "../main-components"
import RotatingPokeballFeedbackLoadingMore from "./RotatingPokeballFeedbackLoadingMore"

function PokemonLoadingMoreFeedback() {
  return ( 
    <CenteredFlexRow $gap="3rem">
      <RotatingPokeballFeedbackLoadingMore/>
      <Title>Loading more Pokemons...</Title>
    </CenteredFlexRow>
  )
}

export default PokemonLoadingMoreFeedback