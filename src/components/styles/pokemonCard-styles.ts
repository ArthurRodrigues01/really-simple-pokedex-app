import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import {
  CenteredFlexCol,
  CenteredFlexRow,
  CenteredGridRow
} from "../main-components";

export const PokemonCardWrapper = styled(CenteredFlexRow)`
  width: calc((2rem * 2) + 950px);  

  @media ${DEVICE_QUERIES.laptop} {
    align-self: stretch;
    width: auto;
  }

  @media ${DEVICE_QUERIES.tablet} {
    flex-direction: column;
  }
`
export const PokemonStatsWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string}>`
  border-top-left-radius: 4rem;
  background-color: ${(props) => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  width: 30%;
  gap: 1.5rem;

  @media ${DEVICE_QUERIES.laptop} {
    border-radius: 0;
  }

  @media ${DEVICE_QUERIES.tablet} {
    align-self: stretch;
    width: auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export const PokemonEntry = styled(CenteredFlexRow)<{ $backgroundColor?: string}>`
  align-self: stretch;  
  border-bottom-right-radius: 4rem; 
  background-color: ${props => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  width: 70%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: italic;
  text-wrap: wrap;

  @media ${DEVICE_QUERIES.laptop} {
    border-radius: 0;
  }

  @media ${DEVICE_QUERIES.tablet} {
    width: auto;
  }
`

export const PokemonCardGridArea = styled(CenteredGridRow)`
  text-align: center;
`