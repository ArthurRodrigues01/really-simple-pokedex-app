import { getPokemonTypeColor, getPokemonWrapperTypeColor } from "../../functions/poke-functions"
import { PokedexEntry } from "../../types/pokemon-related-types"
import { CenteredFlexCol, SubTitle, Text, Title } from "../main-components"
import { PokemonType, PokemonTypesWrapper } from "../styles"
import {
  PokemonCardWrapper,
  PokemonEntry,
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
    <PokemonCardWrapper >
      <PokemonStatsWrapper $backgroundColor={getPokemonTypeColor(types[0])}>
        <CenteredFlexCol $gap={'1.5rem'}>
          <Title $color="#fff">{name}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={`${spriteSrc}`} width={250} height={250}/>
          </PokemonSpriteWrapper>
        </CenteredFlexCol>
        <CenteredFlexCol style={{gap: '1.5rem'}}>
          <SubTitle $color="#fff">ID: <Text>{id}</Text></SubTitle>
          <SubTitle $color="#fff">Gen: <Text>{gen}</Text></SubTitle>
          <SubTitle $color="#fff">Height: <Text>{height}m</Text></SubTitle>
          <SubTitle $color="#fff">Weight: <Text>{weight}kg</Text></SubTitle>
          <PokemonTypesWrapper>
            {types.map(type => <PokemonType key={`pokemon-type-${type}`} type={type}/>)}
          </PokemonTypesWrapper>
        </CenteredFlexCol>
      </PokemonStatsWrapper>
      <PokemonEntry $backgroundColor={getPokemonWrapperTypeColor(types[0])}>{pokedexEntries[0].flavor_text}</PokemonEntry>
    </PokemonCardWrapper>
  )
}

export default PokemonCard