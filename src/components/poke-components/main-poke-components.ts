import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { POKEMON_IMAGE_WRAPPER_BG_COLOR } from "../../constants/pokemon-related-constants";
import { CenteredFlexCol } from "../main-components";

export const PokemonSpriteWrapper = styled(CenteredFlexCol)`
  border-radius: 999px;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
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
export const PokemonSprite = styled.img`
  width: auto;
  max-width: 175px;
  height: auto;
  max-height: 175px;
  
  @media ${DEVICE_QUERIES.tablet} {
    max-width: 150px;
    max-height: 150px;
  }
  @media ${DEVICE_QUERIES.mobileL} {
    max-width: 100px;
    max-height: 100px;
  }
`