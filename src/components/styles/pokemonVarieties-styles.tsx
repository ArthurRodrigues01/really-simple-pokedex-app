import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { CenteredFlexRow } from "../main-components";

export const PokemonVarietiesWrapper = styled(CenteredFlexRow)<{ $backgroundColor: string }>`
  flex-wrap: wrap;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem;
  width: 950px;

  @media ${DEVICE_QUERIES.laptop} {
    align-self: stretch;
    border-radius: 0;
    width: auto;
  }
`