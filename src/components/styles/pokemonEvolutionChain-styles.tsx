import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { CenteredFlexCol, CenteredFlexRow } from "../main-components";

export const PokemonEvolutionChainWrapper = styled(CenteredFlexRow)<{ $backgroundColor: string }>`
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem;
  width: 950px;
  gap: 2rem;
  
  @media ${DEVICE_QUERIES.laptop} {
    flex-wrap: wrap;
    align-self: stretch;
    width: auto;
    border-radius: 0;
  }
`

export const PokemonEvolutionChainGridArea = styled.div<{ 
  $backgroundColor: string 
}>`
  display: grid;  
  grid-auto-rows: 175px;
  grid-auto-columns: 175px;
  grid-auto-flow: row;
  justify-content: center;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem;
  width: 950px;
  overflow-x: auto;
  gap: 1rem;
  
  @media ${DEVICE_QUERIES.laptop} {
    grid-auto-flow: column;
    align-self: stretch;
    justify-content: space-evenly;
    border-radius: 0;
    width: auto;
  }
`
export const PokemonEvolutionChainGridCell = styled(CenteredFlexCol)<{
  $gridColumn?: string, 
  $gridRow?: string
}>`
  ${props => props.$gridColumn ? `grid-column: ${props.$gridColumn}` : ''};
  ${props => props.$gridRow ? `grid-row: ${props.$gridRow}` : ''};
  
  @media ${DEVICE_QUERIES.laptop} {
    ${props => props.$gridRow ? `grid-column: ${props.$gridRow}` : ''};
    ${props => props.$gridColumn ? `grid-row: ${props.$gridColumn}` : ''};
    ${props => props.$gridColumn && props.$gridRow === undefined ? 'grid-column: auto' : ''};
    ${props => props.$gridRow && props.$gridColumn === undefined ? 'grid-row: auto' : ''};
  }
`