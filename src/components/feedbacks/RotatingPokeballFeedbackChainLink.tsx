import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import Rotate from "../Rotate"

function RotatingPokeballFeedbackChainLink({ pokemonId }: { pokemonId: number | string }) {
  const PokeballImg = styled.img`
    width: 150px;
    height: 150px;

    @media ${DEVICE_QUERIES.tablet} {
      width: 125px;
      height: 125px;
    }
  `
  
  return (
    <Rotate>
      <PokeballImg
        src={"/really-simple-pokedex-app/pokeball.svg"} 
        alt={`Loading pokemon ${pokemonId}`}
      />
    </Rotate>
  )
}

export default RotatingPokeballFeedbackChainLink