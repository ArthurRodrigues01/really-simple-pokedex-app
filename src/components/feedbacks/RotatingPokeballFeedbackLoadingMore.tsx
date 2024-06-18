import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import Rotate from "../Rotate"

const PokeballImg = styled.img`
  width: 125px;
  height: 125px;

  @media ${DEVICE_QUERIES.tablet} {
    width: 75px;
    height: 75px;
  }
`

function RotatingPokeballFeedbackLoadingMore() {
  return (
    <Rotate>
      <PokeballImg 
        src={"/really-simple-pokedex-app/pokeball.svg"} 
        alt={'Loading more pokemons'}
      />
    </Rotate>
  )
}

export default RotatingPokeballFeedbackLoadingMore