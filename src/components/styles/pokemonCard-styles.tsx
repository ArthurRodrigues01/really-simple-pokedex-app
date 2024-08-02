import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";
import { PokemonAbility } from "../../types/pokemon-related-types";
import {
  CenteredFlexCol,
  CenteredFlexRow,
  FlexCol,
  Text,
  Title
} from "../main-components";
import { PokemonSprite, PokemonSpriteWrapper } from "../poke-components/main-poke-components";

export const PokemonSpriteWrapperPokemonCard = styled(PokemonSpriteWrapper)`
  width: 320px;
  height: 320px;

  @media ${DEVICE_QUERIES.mobileM} {
    width: 240px;
    height: 240px;
  }
`
export const PokemonSpritePokemonCard = styled(PokemonSprite)`
  max-width: calc(320px * 0.7);
  max-height: calc(320px * 0.7);

  @media ${DEVICE_QUERIES.mobileM} {
    max-width: calc(240px * 0.7);
    max-height: calc(240px * 0.7);
  }
`
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
  align-self: stretch;
  border-top-left-radius: 2rem;
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
  align-self: stretch;  
  justify-content: space-around;
  border-bottom-right-radius: 2.5rem;
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
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </PokemonAbilitiesWrapper>
  </FlexCol>
)