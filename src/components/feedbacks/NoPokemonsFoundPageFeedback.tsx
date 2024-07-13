import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import { CenteredFlexCol, Title } from "../main-components"

const DizzyPikachuImg = styled.img`
  width: 600px;

  @media ${DEVICE_QUERIES.tablet} {
    width: 400px;
  }
  
  @media ${DEVICE_QUERIES.mobileL} {
    width: 300px;
  }
`

function NoPokemonsFoundPageFeedback() {
  return (
    <CenteredFlexCol $gap={'2rem'} style={{ height: '75vh'}}>
      <DizzyPikachuImg
        src="/really-simple-pokedex-app/pikachu-dizzy.gif"
        alt="Dizzy pikachu gif"
      />
      <Title>No Pokemons Found</Title>
    </CenteredFlexCol>
  )
}

export default NoPokemonsFoundPageFeedback