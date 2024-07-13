import styled from "styled-components"

import { CenteredFlexRow, SubTitle } from "../main-components"
import RotatingPokeballFeedbackSearchBar from "./RotatingPokeballFeedbackSearchBar"

const Wrapper = styled(CenteredFlexRow)`
  padding: 1rem;
  overflow: hidden;
  gap: 1rem;
`

function SuggestionBoxLoadingFeedback() {
  return (
    <Wrapper>
      <RotatingPokeballFeedbackSearchBar/>
      <SubTitle $color="#000">Loading Pokemons...</SubTitle>
    </Wrapper>
  )
}

export default SuggestionBoxLoadingFeedback