import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { POKEMON_COLOR_1, POKEMON_COLOR_2, POKEMON_COLOR_3 } from "../../constants/pokemon-related-constants";
import { FlexRow, NoDecorationLink, Title } from "../main-components";

export const NavHeaderWrapper = styled(FlexRow)`
  position: relative;
  padding: 1rem 2rem;
  align-items: center;
  margin-bottom: 1.5rem;  
  border-bottom: 4px solid #fff;
  background-color: ${POKEMON_COLOR_3};
  gap: 2rem;

  @media ${DEVICE_QUERIES.tablet} {
    padding: 1rem 0 0;
    justify-content: center;  
    flex-direction: column;
  }
`

const NavHeaderTitle = styled(Title)`
  transition: all 0.2s;
  color: #fff;
  filter: drop-shadow(7px 7px 1px ${POKEMON_COLOR_2}) ;

  &: hover {
    @media (min-width: 768px) {
      color: ${POKEMON_COLOR_1};
    }
  }
`
export const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;

  @media ${DEVICE_QUERIES.tablet} {
    gap: 1rem;
  }
`

export const NavHeaderItem = ({ children, to }: { children: string, to: string }) => {
  return ( 
    <NoDecorationLink to={to}>
      <NavHeaderTitle >{children}</NavHeaderTitle>
    </NoDecorationLink>
  )
} 