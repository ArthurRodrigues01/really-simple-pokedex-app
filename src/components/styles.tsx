import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { getPokemonTypeColor } from "../functions/poke-functions"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import { CenteredFlexCol, CenteredFlexRow, NoDecorationLink, Title } from "./main-components"
import { PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components"

export const PaginationCell = styled(NoDecorationLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: .2s;
  background-color: #fff;
  padding: 1.2rem;
  width: 2rem;
  height: 2rem;
  color: #000;
  font-size: 1.3rem;
  
  &:hover {
    background-color: #d4d4d4;
  }
  &: first-child {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
  &: last-child {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`
export const PaginationCellCurrent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: .2s;
  background-color: #fff;
  cursor: not-allowed;
  padding: 1.2rem;
  width: 2rem;
  height: 2rem;
  color: #000;
  font-size: 1.3rem;
  user-select: none;

  &:hover {
    background-color: #d4d4d4;
  }
  &: first-child {
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
  }
  &: last-child {
    border-top-right-radius: 1000px;
    border-bottom-right-radius: 1000px;
  }
`
export const CenteredFlexRowGap = styled(CenteredFlexRow)`
  gap: 3rem;
`
export const CenteredFlexColGap = styled(CenteredFlexCol)`
  gap: 3rem;
`
export const PokemonStatsWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string}>`
  width: 30%;
  border-top-left-radius: 4rem;
  background-color: ${(props) => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  gap: 1.5rem;
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
export const PokemonCardWrapper = styled(CenteredFlexRow)<{ $backgroundColor?: string}>`
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  width: calc(10rem + 950px);
`
const PokemonEntryWrapper = styled(Title)`
  padding: 3rem;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: italic;
  text-wrap: wrap;
`

export function PokemonEntry({ children }: { children: string }) {
  return (
    <CenteredFlexRow style={{ width: '70%' }}>
      <PokemonEntryWrapper $color="#fff">
        { children }
      </PokemonEntryWrapper>
    </CenteredFlexRow>
  )
}

export function PokemonType({ type }: { type: string }) {
  return (
    <HoverableGrowthFeedback
      $borderRadius={64}
    >
      <Link to={`/filtered?type1=${type}`} style={{borderRadius: '4rem'}}>
        <PokemonTypeWrapper style={{backgroundColor: getPokemonTypeColor(type)}}>
          <PokemonTypeImage src={`/really-simple-pokedex-app/pokemon-types/${type}.svg`} alt={`Pokemon ${type} type icon`}/>
        </PokemonTypeWrapper>
      </Link>
    </HoverableGrowthFeedback>
  )
}

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

export const PokemonSpriteChainLink = styled(PokemonSprite)`
  width: 125px;
  height: 125px;
`
export const PokemonSpriteWrapperChainLink = styled(PokemonSpriteWrapper)`
  width: 175px;
  height: 175px;
`
export const PokemonEvolutionChainWrapper = styled(CenteredFlexRow)<{ $backgroundColor: string }>`
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 5rem;
  width: 950px;
  gap: 2rem;
`
export const PokemonVarietiesWrapper = styled(CenteredFlexRow)<{ $backgroundColor: string }>`
  flex-wrap: wrap;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 5rem;
  width: 950px;
`

export const SectionTitleWrapper = styled.div<{ $backgroundColor: string }>`
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem 5rem;
  width: 950px;
`
export const RotateImage = styled.img<{ $angle?: number }>`
  transform: rotate(${props => props.$angle ? props.$angle : 0}deg);
`