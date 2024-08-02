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
    width: 140px;
    height: 140px;
  }
`
export const PokemonSprite = styled.img`
  width: auto;
  max-width: calc(250px * 0.7);
  height: auto;
  max-height: calc(250px * 0.7);
  
  @media ${DEVICE_QUERIES.tablet} {
    max-width: calc(200px * 0.7);
    max-height: calc(200px * 0.7);
  }
  @media ${DEVICE_QUERIES.mobileL} {
    max-width: calc(140px * 0.7);
    max-height: calc(140px * 0.7);
  }
`