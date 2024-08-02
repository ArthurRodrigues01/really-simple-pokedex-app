import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import { CenteredGridRow, FlexRow } from "../main-components"

export const PokemonDetailsWrapper = styled(FlexRow)<{ $backgroundColor: string }>`
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
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

export const PokemonDetailsGridArea = styled(CenteredGridRow)`
  grid-template-columns: auto auto;
  
  @media ${DEVICE_QUERIES.tablet} {
    grid-template-columns: auto;
  }
`