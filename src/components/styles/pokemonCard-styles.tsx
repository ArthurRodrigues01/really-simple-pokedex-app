import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { PokemonAbility } from "../../types/pokemon-related-types";
import {
  CenteredFlexCol,
  CenteredFlexRow,
  CenteredGridRow,
  FlexCol,
  Text,
  Title
} from "../main-components";

export const PokemonCardWrapper = styled(CenteredFlexRow)`
  width: calc((2rem * 2) + 950px);  

  @media ${DEVICE_QUERIES.laptop} {
    align-self: stretch;
    width: auto;
  }

  @media ${DEVICE_QUERIES.tablet} {
    flex-direction: column;
  }
`
export const PokemonStatsWrapper = styled(CenteredFlexCol)<{ $backgroundColor?: string}>`
  border-top-left-radius: 4rem;
  background-color: ${(props) => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  width: 40%;
  gap: 1.5rem;

  @media ${DEVICE_QUERIES.laptop} {
    border-radius: 0;
  }

  @media ${DEVICE_QUERIES.tablet} {
    flex-direction: row;
    align-self: stretch;
    justify-content: space-evenly;
    width: auto;
  }
`
export const PokemonFlavorTextsWrapper = styled(FlexCol)<{ $backgroundColor?: string}>`
  justify-content: space-around;
  align-self: stretch;  
  border-bottom-right-radius: 4rem;
  background-color: ${props => props.$backgroundColor ? props.$backgroundColor : '#d4d4d4'};
  padding: 1.5rem;
  width: 60%;

  @media ${DEVICE_QUERIES.laptop} {
    border-radius: 0;
  }

  @media ${DEVICE_QUERIES.tablet} {
    width: auto;
  }
`
const PokemonAbilitiesWrapper = styled(FlexCol)`
  gap: 1rem;
  padding-left: 1rem;
` 

const PokemonText = styled(Text)`
  font-style: italic;
`
const PokemonTitle = styled(Title)`
  font-size: 1.8rem;
`
const PokemonAbilityContainer = ({name, description}: PokemonAbility) => (
  <FlexCol $gap='1rem'>
    <PokemonTitle>{name}</PokemonTitle>
    <PokemonText>{description}</PokemonText>
  </FlexCol>
)

export const PokemonPokedexEntry = ({pokedexEntry}: {pokedexEntry: string}) => (
  <FlexCol $gap='1rem'>
    <PokemonTitle>Description</PokemonTitle>
    <PokemonText>{pokedexEntry}</PokemonText>
  </FlexCol>
)

export const PokemonAbilities = ({abilities}: {abilities: PokemonAbility[]}) => (
  <FlexCol $gap={'2rem'}>
    <PokemonTitle>Abilities</PokemonTitle>
    <PokemonAbilitiesWrapper>
      {abilities.map(item => (
        <PokemonAbilityContainer
          name={item.name}
          description={item.description}
        />
      ))}
    </PokemonAbilitiesWrapper>
  </FlexCol>
)

export const PokemonCardGridArea = styled(CenteredGridRow)`
  text-align: center;
`