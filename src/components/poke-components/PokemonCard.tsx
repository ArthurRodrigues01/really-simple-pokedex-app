import {
  getPokemonTypeColor,
  getPokemonWrapperTypeColor
} from "../../functions/poke-functions"
import { PokedexEntry, PokemonAbility } from "../../types/pokemon-related-types"
import { CenteredFlexCol, SubTitle, Text, Title } from "../main-components"
import { PokemonType, PokemonTypesWrapper } from "../styles"
import {
  PokemonAbilities,
  PokemonCardGridArea,
  PokemonCardWrapper,
  PokemonFlavorTextsWrapper,
  PokemonPokedexEntry,
  PokemonStatsWrapper,
} from "../styles/pokemonCard-styles"
import { PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components"

function PokemonCard({ 
  id, 
  name, 
  spriteSrc, 
  height, 
  weight, 
  types, 
  gen, 
  pokedexEntries,
  abilities,
}: {
  id: number;
  gen: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  spriteSrc: string;
  pokedexEntries: PokedexEntry[];
  abilities: PokemonAbility[];
}) {

  return (
    <PokemonCardWrapper >
      <PokemonStatsWrapper $backgroundColor={getPokemonTypeColor(types[0])}>
        <CenteredFlexCol $gap={'1.5rem'}>
          <Title>{name}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={`${spriteSrc}`} width={250} height={250}/>
          </PokemonSpriteWrapper>
        </CenteredFlexCol>
        <PokemonCardGridArea $gap='1.5rem'>
          <SubTitle>ID: <Text>{id}</Text></SubTitle>
          <SubTitle>Gen: <Text>{gen}</Text></SubTitle>
          <SubTitle>Height: <Text>{height}m</Text></SubTitle>
          <SubTitle>Weight: <Text>{weight}kg</Text></SubTitle>
          <PokemonTypesWrapper>
            {types.map(type => <PokemonType key={`pokemon-type-${type}`} type={type}/>)}
          </PokemonTypesWrapper>
        </PokemonCardGridArea>
      </PokemonStatsWrapper>
      <PokemonFlavorTextsWrapper 
        $backgroundColor={getPokemonWrapperTypeColor(types[0])}
        $gap={'1rem'}
      >
        <PokemonPokedexEntry pokedexEntry={pokedexEntries[0].flavor_text}/>
        <PokemonAbilities abilities={abilities}/>
      </PokemonFlavorTextsWrapper>
    </PokemonCardWrapper>
  )
}

export default PokemonCard