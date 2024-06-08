import styled from "styled-components";

import { POKEMON_COLOR_1, POKEMON_COLOR_2, POKEMON_COLOR_3 } from "../../constants/pokemon-related-constants";
import { CenteredFlexRow, NoDecorationLink, Title } from "../main-components";

export const NavHeaderWrapper = styled(CenteredFlexRow)`
  background-color: ${POKEMON_COLOR_3};
  gap: 3rem;
  border-bottom: 0.5rem solid #fff;
  margin-bottom: 1rem;  
`

export const NavHeaderTitle = styled(Title)`
  transition: all 0.2s;
  color: #fff;
  filter: drop-shadow(7px 7px 1px ${POKEMON_COLOR_2}) ;

  &: hover {
    @media (min-width: 768px) {
      color: ${POKEMON_COLOR_1};
    }
  }

`

export const NavHeaderItem = ({ children, to }: { children: string, to: string }) => {
  return ( 
    <NoDecorationLink to={to}>
      <NavHeaderTitle >{children}</NavHeaderTitle>
    </NoDecorationLink>
  )
} 