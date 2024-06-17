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
      width: 150px;
      height: 150px;
    }
  `

function RotatingPokeballFeedback({ pokemonId }: { pokemonId?: number | string }) {

  return (
    <Rotate>
      <PokeballImg 
        src={"/really-simple-pokedex-app/pokeball.svg"} 
        alt={pokemonId ? `Loading pokemon ${pokemonId}` : 'Loading'} 
      />
    </Rotate>
  )
}

export default RotatingPokeballFeedback