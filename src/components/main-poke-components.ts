import styled from "styled-components";
import { CenteredFlexCol } from "./main-components";
import { POKEMON_IMAGE_WRAPPER_BG_COLOR } from "../constants/pokemon-related-constants";

export const PokemonPreviewCardWrapper = styled(CenteredFlexCol)<{ type?: string }>`
  text-wrap: balance;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${props => props.type || '#d4d4d4'};
  gap: 1.5rem;
  padding: 1.5rem;
`
export const PokemonImageWrapper = styled(CenteredFlexCol)`
  border-radius: 100000px;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
  height: 250px;
  width: 250px;
`
export const PokemonImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`