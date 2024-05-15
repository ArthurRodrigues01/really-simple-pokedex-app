import styled from "styled-components";

import { POKEMON_IMAGE_WRAPPER_BG_COLOR } from "../constants/pokemon-related-constants";
import { CenteredFlexCol } from "./main-components";

export const PokemonPreviewCardWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string }>`
  text-wrap: balance;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${props => props.$backgroundColor || '#d4d4d4'};
  gap: 1.5rem;
  padding: 1.5rem;
`
export const PokemonSpriteWrapper = styled(CenteredFlexCol)`
  border-radius: 100000px;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
  height: 250px;
  width: 250px;
`
export const PokemonSprite = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`