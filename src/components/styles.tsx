import { ReactNode } from "react"
import styled from "styled-components"

import { getPokemonTypeColor } from "../functions/poke-functions"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import { CenteredFlexCol, CenteredFlexRow, NoDecorationLink, Title } from "./main-components"

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
export const PokemonStatsWrapper = styled(CenteredFlexCol)<{ type?: string}>`
  min-width: 325px;
  border-top-left-radius: 1rem;
  background-color: ${(props) => props.type ? props.type : '#d4d4d4'};
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
export const PokemonCardWrapper = styled(CenteredFlexRow)<{ type?: string}>`
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${props => props.type ? props.type : '#d4d4d4'};
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
    <CenteredFlexRow style={{ width: 500 }}>
      <PokemonEntryWrapper color="#fff">
        { children }
      </PokemonEntryWrapper>
    </CenteredFlexRow>
  )
}

export function PokemonType({ type }: { type: string }) {
  return (
    <PokemonTypeWrapper style={{backgroundColor: getPokemonTypeColor(type)}}>
      <PokemonTypeImage src={`/really-simple-pokedex-app/pokemon-types/${type}.svg`} alt={`Pokemon ${type} type icon`}/>
    </PokemonTypeWrapper>
  )
}

const FilterBase = styled(CenteredFlexRow)`
  border-radius: 4rem;
  background-color: gray;
  min-width: 5rem;
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
export function Filter({ 
  children, 
  onClick
}: { 
  children: ReactNode, 
  onClick: () => void
}) {
  return (
    <HoverableGrowthFeedback
      borderRadius={64}
    >
      <FilterBase onClick={onClick}>
        { children }
      </FilterBase>
    </HoverableGrowthFeedback>
  )
}

export function FilterType({ 
  children, 
  type, 
  onClick 
}: { 
  children: ReactNode, 
  type: string, 
  onClick: () => void 
}) {
  return (
    <HoverableGrowthFeedback
      borderRadius={64}
    >
      <FilterBase onClick={onClick} style={{ backgroundColor: getPokemonTypeColor(type), minWidth: '8rem' }}>
        { children }
      </FilterBase>
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