import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { CenteredFlexCol } from "../main-components";
import { PokemonSprite, PokemonSpriteWrapper } from "../poke-components/main-poke-components";

export const PokemonPreviewCardWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string }>`
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  background-color: ${props => props.$backgroundColor || '#d4d4d4'};
  padding: 1.5rem;
  width: calc(250px + 3rem);
  gap: 1.5rem;

  @media ${DEVICE_QUERIES.tablet} {
    padding: 1rem;
    width: 200px;
    gap: 1rem;  
  }
  @media ${DEVICE_QUERIES.mobileL} {
    width: calc(125px + 1rem);
  }
  @media ${DEVICE_QUERIES.mobileM} {
    width: calc(100px + 1rem);
    gap: .7rem;
  }
`

export const PokemonSpriteWrapperPreviewCard = styled(PokemonSpriteWrapper)`
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

export const PokemonSpritePreviewCard = styled(PokemonSprite)`
  @media ${DEVICE_QUERIES.tablet} {
    max-width: 150px;
    max-height: 150px;
  }
  @media ${DEVICE_QUERIES.mobileL} {
    max-width: 95px;
    max-height: 95px;
  }
  @media ${DEVICE_QUERIES.mobileM} {
    max-width: 75px;
    max-height: 75px;
  }
`