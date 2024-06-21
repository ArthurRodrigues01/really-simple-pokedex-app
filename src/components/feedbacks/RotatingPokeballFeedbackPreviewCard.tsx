import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import Rotate from "../Rotate"

const PokeballImg = styled.img`
  width: 250px;
  height: 250px;

  @media ${DEVICE_QUERIES.tablet} {
    width: 200px;
    height: 200px;
  }
  
  @media ${DEVICE_QUERIES.mobileL} {
    width: 125px;
    height: 125px;
  }
  @media ${DEVICE_QUERIES.mobileM} {
    width: 100px;
    height: 100px;
  }
`

function RotatingPokeballFeedbackPreviewCard({ pokemonId }: { pokemonId?: number | string }) {
  return (
    <Rotate>
      <PokeballImg 
        src={"/really-simple-pokedex-app/pokeball.svg"} 
        alt={pokemonId ? `Loading pokemon ${pokemonId}` : 'Loading'} 
      />
    </Rotate>
  )
}

export default RotatingPokeballFeedbackPreviewCard