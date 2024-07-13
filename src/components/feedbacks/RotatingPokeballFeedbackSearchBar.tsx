import styled from "styled-components"

import Rotate from "../Rotate"

const PokeballImg = styled.img`
  width: 50px;
  height: 50px;
`

function RotatingPokeballFeedbackSearchBar({ pokemonId }: { pokemonId?: number | string }) {
  return (
    <Rotate>
      <PokeballImg
        src={"/really-simple-pokedex-app/pokeball.svg"} 
        alt={`${ pokemonId ? `Loading pokemon ${pokemonId} image` : 'Loading'}`}
      />
    </Rotate>
  )
}

export default RotatingPokeballFeedbackSearchBar