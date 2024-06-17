import { CenteredFlexCol, Title } from '../main-components'
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

function PokemonPageLoadingFeedback() {
  return (
    <CenteredFlexCol style={{height: '75vh'}}>
      <RotatingPokeballFeedback/>
      <Title $color='#fff'>Loading...</Title>
    </CenteredFlexCol>
  )
}

export default PokemonPageLoadingFeedback