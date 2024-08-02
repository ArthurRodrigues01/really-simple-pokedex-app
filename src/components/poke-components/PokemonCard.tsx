import {
  getPokemonTypeColor,
  getPokemonWrapperTypeColor
} from "../../functions/poke-functions"
import { PokedexEntry, PokemonAbility } from "../../types/pokemon-related-types"
import { CenteredFlexCol, Title } from "../main-components"
import { PokemonType, PokemonTypesWrapper } from "../styles"
import {
  PokemonAbilities,
  PokemonCardWrapper,
  PokemonFlavorTextsWrapper,
  PokemonPokedexEntry,
  PokemonSpritePokemonCard,
  PokemonSpriteWrapperPokemonCard,
  PokemonStatsWrapper,
} from "../styles/pokemonCard-styles"

function PokemonCard({
  name, 
  spriteSrc, 
  types, 
  pokedexEntries,
  abilities,
}: {
  name: string;
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
          <PokemonSpriteWrapperPokemonCard>
            <PokemonSpritePokemonCard 
              src={`${spriteSrc}`}
            />
          </PokemonSpriteWrapperPokemonCard>
          <PokemonTypesWrapper>
            {types.map(type => (
              <PokemonType 
                key={`pokemon-type-${type}`} 
                type={type}
              />
            ))}
          </PokemonTypesWrapper>
        </CenteredFlexCol>
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