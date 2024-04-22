import { 
  NamedAPIResource,
  PokedexEntry, 
  PokemonData,
  PokemonPreviewData,
  PokemonType
} from "../types/pokemon-related-types";
import { isInRange, isNaturalNumber } from "./other-functions";

export async function getPokemonData(id: number): Promise<PokemonData | null> {
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

export async function getMaxNumberOfPokemons(): Promise<number> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/')
  const rawData = await res.json()

  return rawData.count
}

export function getPokemonPreviewDataFromArray(arr: NamedAPIResource[]): PokemonPreviewData[] {
  return arr.map(item => ({
    id: Number(item.url.split('/')[6]),
    name: item.name
  }))
}

export function removeNonPokemonSpeciesObjectsFromArray(arr: PokemonPreviewData[]): PokemonPreviewData[] {
  return arr.filter(item => item.id < 10000)
}

export function getGenRegion(gen: number) {
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

export function sanitizeTypes(types: string[]) {
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

export function getPokemonTypeColor(pokemonType: string): string {
  switch(pokemonType) {
    case 'bug':
      return '#92BC2C'
    case 'dark': 
      return '#595761' 
    case 'dragon':
      return '#0C69C8'  
    case 'electric':
      return '#F2D94E'  
    case 'fairy':
      return '#EE90E6'  
    case 'fighting':
      return '#de264a'  
    case 'fire':
      return '#ff9430'  
    case 'flying':
      return '#A1BBEC'  
    case 'ghost':
      return '#5F6DBC'  
    case 'grass':
      return '#5FBD58'  
    case 'ground':
      return '#d18645'  
    case 'ice':
      return '#75D0C1'  
    case 'normal':
      return '#A0A29F'  
    case 'poison':
      return '#9d15eb'  
    case 'psychic':
      return '#FA8581'  
    case 'rock':
      return '#C9BB8A'  
    case 'steel':
      return '#5695A3'  
    case 'water':
      return '#539DDF'
    default:
      return '#d4d4d4'  
  }
}