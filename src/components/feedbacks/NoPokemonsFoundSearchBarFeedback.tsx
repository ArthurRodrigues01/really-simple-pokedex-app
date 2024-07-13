import styled from "styled-components"

import { CenteredFlexCol, SubTitle } from "../main-components"

const FaintedPikachuImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`
const Wrapper = styled(CenteredFlexCol)`
  padding: 1rem;
  overflow: hidden;
  gap: 1rem;
`

function NoPokemonsFoundSearchBarFeedback() {
  return ( 
    <Wrapper>
      <FaintedPikachuImg
        src="/really-simple-pokedex-app/fainted-pikachu.png" 
        alt="fainted pikachu icon" 
      />  
      <SubTitle $color="#000">No Pokemons Found</SubTitle>
    </Wrapper>
  )
}

export default NoPokemonsFoundSearchBarFeedback