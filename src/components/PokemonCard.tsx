import { capitalize } from "../functions/other-functions"
import { getGenRegion } from "../functions/poke-functions"
import { PokemonData } from "../types/pokemon-related-types"
import PokePaginationBar  from "./PokePaginationBar"

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
    <>
      <div>
        <h1>{capitalize(name)}</h1>
        <img src={`${spriteSrc}`} width={250} height={250}/>
        <h2>ID: {id}</h2>
        <h2>Gen: {gen}{`(${getGenRegion(gen)})`}</h2>
        <h2>Height: {height}m</h2>
        <h2>Weight: {weight}kg</h2>
        <h2>Types: </h2>
        {types.map(type => <h3>{type}</h3>)}
        <h2>Pokedex Entry: </h2>
        <h3>{pokedexEntries[0].flavor_text}</h3>
      </div>
      <div>
        <PokePaginationBar 
          max={maxNumberOfPokemons}
          growth={3}
          current={id}
        />
      </div>
    </>
  )
}

export default PokemonCard