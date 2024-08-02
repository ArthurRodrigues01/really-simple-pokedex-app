import { Link } from "react-router-dom"
import styled from "styled-components"

import { DEVICE_QUERIES } from "../constants/other-constants"
import { getPokemonTypeColor } from "../functions/poke-functions"
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback"
import { CenteredFlexCol, CenteredFlexRow } from "./main-components"

export const FeedbackedButton = styled.button`
  transition: 0.3s;
  border-radius: 4rem;
  background-color: #1d4ede;
  cursor: pointer;
  padding: 1rem 5rem;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;


  @media ${DEVICE_QUERIES.tablet} {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }
    
  &: hover {
    background-color: #215aff;
  }
`
export const PokemonSectionTitleWrapper = styled.div<{ $backgroundColor: string }>`
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  background-color: ${props => props.$backgroundColor};
  padding: 2rem 2rem;
  width: 950px;
  
  @media ${DEVICE_QUERIES.laptop} {
    align-self: stretch;
    border-radius: 0;
    width: auto;
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
  border-radius: 1.5rem;
  background-color: #fff;
  padding: .5rem;    
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