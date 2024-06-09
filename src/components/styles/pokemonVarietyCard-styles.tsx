import styled from "styled-components";

import { CenteredFlexCol } from "../main-components";

export const PokemonModalStatsWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string}>`
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${(props) => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  min-width: 19vw;
  gap: 1.5rem;
`