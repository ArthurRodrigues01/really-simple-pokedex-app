import { capitalize } from "../functions/other-functions"
import { getPokemonTypeColor, getPokemonWrapperTypeColor } from "../functions/poke-functions"
import { PokemonData } from "../types/pokemon-related-types"
import { SubTitle, Text, Title } from "./main-components"
import { PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components"
import PokePaginationBar  from "./PokePaginationBar"
import { CenteredFlexColGap, PokemonCardWrapper, PokemonEntry, PokemonStatsWrapper, PokemonType, PokemonTypesWrapper } from "./styles"

function PokemonCard({ 
  id, 
  name, 
  spriteSrc, 
  height, 
  weight, 
  types, 
  gen, 
  pokedexEntries, 
  maxNumberOfPokemons 
}: PokemonData) {

  return (
    <CenteredFlexColGap>
      <PokemonCardWrapper type={getPokemonWrapperTypeColor(types[0])}>
        <PokemonStatsWrapper type={getPokemonTypeColor(types[0])}>
          <Title color="#fff">{capitalize(name)}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={`${spriteSrc}`} width={250} height={250}/>
          </PokemonSpriteWrapper>
          <SubTitle color="#fff">ID: <Text>{id}</Text></SubTitle>
          <SubTitle color="#fff">Gen: <Text>{gen}</Text></SubTitle>
          <SubTitle color="#fff">Height: <Text>{height}m</Text></SubTitle>
          <SubTitle color="#fff">Weight: <Text>{weight}kg</Text></SubTitle>
          <PokemonTypesWrapper>
            {types.map(type => <PokemonType key={`pokemon-type-${type}`} type={type}/>)}
          </PokemonTypesWrapper>
        </PokemonStatsWrapper>
        <PokemonEntry>{pokedexEntries[0].flavor_text}</PokemonEntry>
      </PokemonCardWrapper>
      <PokePaginationBar 
        max={maxNumberOfPokemons}
        growth={3}
        current={id}
      />
    </CenteredFlexColGap>
  )
}

export default PokemonCard