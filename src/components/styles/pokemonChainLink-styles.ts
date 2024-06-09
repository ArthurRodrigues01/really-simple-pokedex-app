import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import { PokemonSprite, PokemonSpriteWrapper } from "../poke-components/main-poke-components"

export const PokemonSpriteChainLink = styled(PokemonSprite)`
  max-width: 125px;
  max-height: 125px;

  @media ${DEVICE_QUERIES.mobileL} {
    max-width: 100px;
    max-height: 100px;
  }
`
export const PokemonSpriteWrapperChainLink = styled(PokemonSpriteWrapper)`
  width: 175px;
  height: 175px;

  @media ${DEVICE_QUERIES.mobileL} {
    width: 150px;
    height: 150px;
  }
`