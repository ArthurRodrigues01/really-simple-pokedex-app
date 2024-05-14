import { capitalize } from "../functions/other-functions"
import { getPokemonTypeColor, getPokemonWrapperTypeColor } from "../functions/poke-functions"
import { PokedexEntry } from "../types/pokemon-related-types"
import { SubTitle, Text, Title } from "./main-components"
import { PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components"
import {
  PokemonCardWrapper,
  PokemonEntry,
  PokemonStatsWrapper,
  PokemonType,
  PokemonTypesWrapper
} from "./styles"

function PokemonCard({ 
  id, 
  name, 
  spriteSrc, 
  height, 
  weight, 
  types, 
  gen, 
  pokedexEntries
}: {
  id: number;
  gen: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  spriteSrc: string;
  pokedexEntries: PokedexEntry[];
}) {

  return (
    <PokemonCardWrapper type={getPokemonWrapperTypeColor(types[0])}>
      <PokemonStatsWrapper type={getPokemonTypeColor(types[0])}>
        <Title $color="#fff">{capitalize(name)}</Title>
        <PokemonSpriteWrapper>
          <PokemonSprite src={`${spriteSrc}`} width={250} height={250}/>
        </PokemonSpriteWrapper>
        <SubTitle $color="#fff">ID: <Text>{id}</Text></SubTitle>
        <SubTitle $color="#fff">Gen: <Text>{gen}</Text></SubTitle>
        <SubTitle $color="#fff">Height: <Text>{height}m</Text></SubTitle>
        <SubTitle $color="#fff">Weight: <Text>{weight}kg</Text></SubTitle>
        <PokemonTypesWrapper>
          {types.map(type => <PokemonType key={`pokemon-type-${type}`} type={type}/>)}
        </PokemonTypesWrapper>
      </PokemonStatsWrapper>
      <PokemonEntry>{pokedexEntries[0].flavor_text}</PokemonEntry>
    </PokemonCardWrapper>
  )
}

export default PokemonCard