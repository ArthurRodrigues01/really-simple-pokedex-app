import { 
  NamedAPIResource,
  PokedexEntry, 
  PokemonData,
  PokemonPreviewData,
  PokemonType
} from "../types/pokemon-related-types";
import { isInRange, isNaturalNumber } from "./other-functions";

async function getPokemonData(id: number): Promise<PokemonData | null> {
  const maxNumberOfPokemons = await getMaxNumberOfPokemons()

  if (!isNaturalNumber(id) || !isInRange(id, maxNumberOfPokemons)) return null

  const resPokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const rawPokemonData = await resPokemonData.json()
  
  const resPokemonSpeciesData = await fetch(rawPokemonData.species.url)
  const rawPokemonSpeciesData = await resPokemonSpeciesData.json()

  const pokemonTypes = rawPokemonData.types.map(
      (typeObject: PokemonType) => typeObject.type.name
  )

  const pokedexEntries = rawPokemonSpeciesData.flavor_text_entries.filter(
    (entryObject: PokedexEntry) => entryObject.language.name === 'en'
  )

  return {
    id: rawPokemonData.id,
    gen: getGenFromFetchedData(rawPokemonSpeciesData),
    name: rawPokemonData.name,
    weight: rawPokemonData.weight / 10, // ??? -> KG
    height: rawPokemonData.height /10, // Decimeters -> Meters
    types: pokemonTypes,
    spriteSrc: rawPokemonData.sprites.other['official-artwork'].front_default,
    pokedexEntries: pokedexEntries,
    maxNumberOfPokemons: maxNumberOfPokemons
  }
}

function getGenFromFetchedData(fetchedPokemonSpeciesData: {
  generation: {
    name: string,
    url: string
  }
}) {
  const genURL = fetchedPokemonSpeciesData.generation.url
  
  return Number(genURL[genURL.length - 2])
}

async function getMaxNumberOfPokemons(): Promise<number> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/')
  const rawData = await res.json()

  return rawData.count
}

function getPokemonPreviewDataFromArray(arr: NamedAPIResource[]): PokemonPreviewData[] {
  return arr.map(item => ({
    id: Number(item.url.split('/')[6]),
    name: item.name
  }))
}

function getGenRegion(gen: number) {
  switch (gen) {
    case 1: 
      return 'Kanto'
    case 2:
      return 'Johto'
    case 3: 
      return 'Hoenn'
    case 4: 
      return 'Sinnoh'
    case 5:
      return 'Unova'
    case 6:
      return 'Kalos'
    case 7: 
      return 'Alola'
    case 8: 
      return 'Galar'
    case 9: 
      return 'Paldea'
    default: 
      return null
  }
}

function sanitizeTypes(types: string[]) {
  const validTypes = [
    'normal', 'fighting', 
    'flying', 'poison', 
    'ground', 'rock', 
    'bug', 'ghost',
    'steel', 'fire',
    'water', 'grass',
    'electric', 'psychic',
    'ice', 'dragon',
    'dark', 'fairy'
  ]
  let sanitizedTypes: string[] = []

  for (const type of types) {
    if (validTypes.includes(type)) {
      sanitizedTypes.push(type)
    }
  }

  return sanitizedTypes
}

export { 
  getPokemonData, 
  getMaxNumberOfPokemons, 
  getGenRegion,
  getPokemonPreviewDataFromArray,
  sanitizeTypes
}