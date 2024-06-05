import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { DEVICE_QUERIES } from "../constants/other-constants"
import { getPokemonTypeColor } from "../functions/poke-functions"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import { CenteredFlexCol, CenteredFlexRow } from "./main-components"

export const CenteredFlexRowGap = styled(CenteredFlexRow)`
  gap: 3rem;
`
export const CenteredFlexColGap = styled(CenteredFlexCol)`
  gap: 3rem;
`
const FilterBase = styled(CenteredFlexRow)`
  border-radius: 4rem;
  background-color: gray;
  cursor: pointer;
  padding: 1rem;
  min-width: 5rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`
export const FiltersWrapper = styled(CenteredFlexRow)`
  flex-wrap: wrap;
  gap: 1rem;
`
export function Filter({ 
  children, 
  onClick
}: { 
  children: ReactNode, 
  onClick: () => void
}) {
  return (
    <HoverableGrowthFeedback
      $borderRadius={'4rem'}
      $growthScale={1.3}
    >
      <FilterBase onClick={onClick}>
        { children }
      </FilterBase>
    </HoverableGrowthFeedback>
  )
}
export function FilterType({ 
  type, 
  onClick 
}: { 
  type: string, 
  onClick: () => void 
}) {
  return (
    <HoverableGrowthFeedback
      $borderRadius={'4rem'}
      $growthScale={1.5}
      style={{cursor: 'pointer'}}
    >
      <CenteredFlexCol onClick={onClick} style={{ backgroundColor: getPokemonTypeColor(type), width: '4rem', height: '4rem', borderRadius: '4rem' }}>
        <img style={{width: '2rem', height: '2rem'}} src={`/really-simple-pokedex-app/pokemon-types/${type}.svg`} alt={`pokemon ${type} type icon`}/>
      </CenteredFlexCol>
    </HoverableGrowthFeedback>
  )
} 
export const FeedbackedButton = styled.button`
  transition: 0.3s;
  border-radius: 4rem;
  background-color: #1d4ede;
  cursor: pointer;
  padding: 1rem 5rem;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;

  &: hover {
    transform: scale(1.2);
    background-color: #215aff;
  }
`
export const PokemonSectionTitleWrapper = styled.div<{ $backgroundColor: string }>`
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem 2rem;
  width: 950px;
  
  @media ${DEVICE_QUERIES.laptop} {
    width: auto;
    border-radius: 0;
    align-self: stretch;
  }
`
export const DivGap = styled.div`
  align-self: stretch;
  width: 6rem;

  @media ${DEVICE_QUERIES.mobileL} {
    width: 1rem;
  }
`
export const PokemonTypesWrapper = styled(CenteredFlexRow)`
  border-radius: 4rem;
  background-color: #fff;
  padding: 0.5rem;
  gap: 1rem;
`
const PokemonTypeWrapper = styled(CenteredFlexRow)`
  border-radius: 4rem;
  width: 3rem;
  height: 3rem;
`
const PokemonTypeImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`
export function PokemonType({ type }: { type: string }) {
  return (
    <HoverableGrowthFeedback
      $borderRadius={'4rem'}
    >
      <Link to={`/filtered?type1=${type}`} style={{borderRadius: '4rem'}}>
        <PokemonTypeWrapper style={{backgroundColor: getPokemonTypeColor(type)}}>
          <PokemonTypeImage src={`/really-simple-pokedex-app/pokemon-types/${type}.svg`} alt={`Pokemon ${type} type icon`}/>
        </PokemonTypeWrapper>
      </Link>
    </HoverableGrowthFeedback>
  )
}
export const SectionWrapper = styled(CenteredFlexCol)`
  width: 100%;
`