import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { POKEMON_IMAGE_WRAPPER_BG_COLOR } from "../../constants/pokemon-related-constants";
import { CenteredFlexCol } from "../main-components";

export const PokemonPreviewCardWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string }>`
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor || '#d4d4d4'};
  padding: 1.5rem;
  width: calc(250px + 3rem);
  text-overflow: ellipsis;
  gap: 1.5rem;

  @media ${DEVICE_QUERIES.tablet} {
    width: calc(170px + 2rem);
    padding: 1rem;
    gap: 1rem;
  }

  @media ${DEVICE_QUERIES.mobileL} {
    width: calc(120px + 3rem);
  }
`
export const PokemonSpriteWrapper = styled(CenteredFlexCol)`
  border-radius: 999px;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
  height: 250px;
  width: 250px;

  @media ${DEVICE_QUERIES.tablet} {
    height: 170px;
    width: 170px;
  }
  @media ${DEVICE_QUERIES.mobileL} {
    height: 120px;
    width: 120px;
  }
`
export const PokemonSprite = styled.img`
  width: auto;
  height: auto;
  max-width: 175px;
  max-height: 175px;
  
  @media ${DEVICE_QUERIES.tablet} {
    max-width: 120px;
    max-height: 120px;
  }

  @media ${DEVICE_QUERIES.mobileL} {
    max-width: 70px;
    max-height: 70px;
  }
`