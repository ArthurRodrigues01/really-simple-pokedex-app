import { ReactNode } from "react";
import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { POKEMON_IMAGE_WRAPPER_BG_COLOR } from "../../constants/pokemon-related-constants";
import { getPokemonTypeColor } from "../../functions/poke-functions";
import HoverableGrowthFeedback from "../feedbacks/HoverableGrowthFeedback";
import { CenteredFlexCol, CenteredFlexRow, FlexCol, FlexRow } from "../main-components";

export const FilteringMenuWrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  width: 560px;
  z-index: 1000;
`
export const FilteringMenuTitleWrapper = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  border-radius: 3rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #777;
  padding: 2rem;
`
export const FilteringMenuContent = styled(FlexCol)`
  background-color: #666;
  padding: 2rem;
  gap: 2rem;
`
export const ActiveFilters = styled(FlexRow)`
  border-radius: 3rem;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
  padding: 1rem;
  height: 4rem;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 2rem;
`
export const OtherFilters = styled(FlexRow)`
  flex-wrap: wrap;
  border-radius: 3rem;
  background-color: ${POKEMON_IMAGE_WRAPPER_BG_COLOR};
  padding: 1rem;
  height: 10rem;
  overflow-y: scroll;
  gap: 2rem;
`
export const HideFilteringMenuButton = styled.img<{ $show?: boolean}>`
  transition: all 0.3s ease-in-out;
  ${props => props.$show ? 'opacity: 1' :  'opacity: 0'};
  cursor: pointer;
  width: 2rem;
  height: 2rem; 
  content: url("/really-simple-pokedex-app/close.svg");
  padding: 0.5rem;
`
const FilterBase = styled(CenteredFlexRow)`
  border-radius: 4rem;
  background-color: gray;
  cursor: pointer;
  padding: 1rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`
export const FiltersWrapper = styled(CenteredFlexRow)`
  flex-wrap: wrap;
  gap: 1rem;
`
const TypeImageWrapper = styled(CenteredFlexCol)<{ $backgroundColor: string }>`
  border-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  width: 4rem;
  height: 4rem;

  @media ${DEVICE_QUERIES.tablet} {
    width: 3rem;
    height: 3rem;
  }
` 
const TypeImage = styled.img`
  width: 2rem;
  height: 2rem;

  @media ${DEVICE_QUERIES.tablet} {
    width: 1.5rem;
    height: 1.5rem;
  }
` 
export const Filter = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => (
  <HoverableGrowthFeedback
    $borderRadius={'4rem'}
    $growthScale={1.3}
  >
    <FilterBase onClick={onClick}>
      { children }
    </FilterBase>
  </HoverableGrowthFeedback>
)
export const FilterType = ({ type, onClick }: { type: string, onClick: () => void }) => (
  <HoverableGrowthFeedback
    $borderRadius={'4rem'}
    $growthScale={1.5}
    $pointingCursor
  >
    <TypeImageWrapper onClick={onClick} $backgroundColor={getPokemonTypeColor(type)}>
      <TypeImage 
        src={`/really-simple-pokedex-app/pokemon-types/${type}.svg`} 
        alt={`pokemon ${type} type icon`}
      />
    </TypeImageWrapper>
  </HoverableGrowthFeedback>
)