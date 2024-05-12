import { VALID_GENS, VALID_TYPES } from "../constants/pokemon-related-constants";
import {
  ChainLink,
  EvolutionChainPage,
  NamedAPIResource,
  NamedAPIResourceList,
  PokemonData,
  PokemonPage,
  PokemonPreviewData,
  SpeciesPage
} from "../types/pokemon-related-types";
import { isInRange, isNaturalNumber } from "./other-functions";

export async function getPokemonData(id: number): Promise<PokemonData | null> {
  const maxNumberOfPokemons = await getMaxNumberOfPokemons()

  if (await isValidPokemonId(id) === false) return null

  const resPokemonPageData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const rawPokemonPageData: PokemonPage = await resPokemonPageData.json()
  
  const resSpeciesPageData = await fetch(rawPokemonPageData.species.url)
  const rawSpeciesPageData: SpeciesPage = await resSpeciesPageData.json()

  const resEvolutionChainPageData = await fetch(rawSpeciesPageData.evolution_chain.url)
  const rawEvolutionChainPageData: EvolutionChainPage = await resEvolutionChainPageData.json() 

  const pokemonTypes = rawPokemonPageData.types.map(
    pokemonTypeObj => pokemonTypeObj.type.name
  )

  const pokedexEntries = rawSpeciesPageData.flavor_text_entries.filter(
    pokemonEntryObj => pokemonEntryObj.language.name === 'en'
  )

  return {
    id: rawPokemonPageData.id,
    gen: getGenFromFetchedData(rawSpeciesPageData),
    name: rawSpeciesPageData.name,
    weight: rawPokemonPageData.weight / 10, // ??? -> KG
    height: rawPokemonPageData.height /10, // Decimeters -> Meters
    types: pokemonTypes,
    spriteSrc: rawPokemonPageData.sprites.other["official-artwork"].front_default,
    pokedexEntries: pokedexEntries,
    maxNumberOfPokemons: maxNumberOfPokemons,
    evolutionChain: rawEvolutionChainPageData.chain
  }
}

function getGenFromFetchedData(fetchedPokemonSpeciesData: SpeciesPage) {
  const genURL = fetchedPokemonSpeciesData.generation.url
    
  return Number(genURL.split('/')[6])
}

export async function getMaxNumberOfPokemons(): Promise<number> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/')
  const rawData: NamedAPIResourceList = await res.json()

  return rawData.count
}

export function getPokemonPreviewDataFromArray(arr: NamedAPIResource[]): PokemonPreviewData[] {
  return arr.map(item => ({
    id: Number(item.url.split('/')[6]),
    name: item.name
  }))
}

export function removeNonSpeciesFromArray(arr: PokemonPreviewData[]): PokemonPreviewData[] {
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
  let sanitizedTypes: string[] = []

  for (const type of types) {
    if (VALID_TYPES.includes(type)) {
      sanitizedTypes.push(type)
    }
  }

  return sanitizedTypes
}

export function isValidType(type: string) {
  return VALID_TYPES.includes(type)
}

export function isValidGen(gen: number) {
  return isNaturalNumber(gen) && isInRange(gen, VALID_GENS.length)
}

export async function isValidPokemonId(id: number) {
  const maxPokemons = await getMaxNumberOfPokemons()
  
  return isNaturalNumber(id) && isInRange(id, maxPokemons)
}

export function getSortedPokemonsById(pokemons: PokemonPreviewData[] | PokemonData[]) {
  return [...pokemons].sort((a, b) => a.id - b.id)
}

export function getPokemonTypeColor(type: string): string {
  switch(type) {
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

export function getPokemonWrapperTypeColor(type: string): string {
  switch(type) {
    case 'bug':
      return '#759623'
    case 'dark': 
      return '#3a3940' 
    case 'dragon':
      return '#0a57a6'  
    case 'electric':
      return '#c9b542'  
    case 'fairy':
      return '#c777c0'  
    case 'fighting':
      return '#a31d38'  
    case 'fire':
      return '#db7f2a'  
    case 'flying':
      return '#798db3'  
    case 'ghost':
      return '#454f87'  
    case 'grass':
      return '#468a41'  
    case 'ground':
      return '#a16735'  
    case 'ice':
      return '#518f85'  
    case 'normal':
      return '#6c6e6b'  
    case 'poison':
      return '#7410ad'  
    case 'psychic':
      return '#d1706d'  
    case 'rock':
      return '#877e5d'  
    case 'steel':
      return '#3a646e'  
    case 'water':
      return '#3f75a6'
    default:
      return '#d4d4d4'  
  }
}

export function getEvolutionChains(chain: ChainLink) {
  function getAllSpeciesFromChain( 
    chain: ChainLink,
    prev: PokemonPreviewData = { id: 0, name: ''}
  ) {
      const returnArr: { species: PokemonPreviewData, evolvesFrom: PokemonPreviewData}[] = chain.evolves_to.map(
        item => getAllSpeciesFromChain(item, { id: Number(chain.species.url.split('/')[6]), name: chain.species.name })
      ).flat()
      
      return [...returnArr, { species: { id: Number(chain.species.url.split('/')[6]), name: chain.species.name }, evolvesFrom: prev}]
  }

  function getConvergion(arr: PokemonPreviewData[][]) {
    let obj: {
      [k: string]: number
    } = {}

    const aux: PokemonPreviewData[] = []

    if (arr.length === 1) {
      return ({
        base: [arr[0][0]],
        branches: [arr[0].filter(item => item !== arr[0][0])]
      })
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (obj[`${arr[i][j].name}`]) {
          obj[`${arr[i][j].name}`]++
        } else {
          obj[`${arr[i][j].name}`] = 1
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (obj[`${arr[i][j].name}`] > 1) {
          const deleted = [...[...arr][i]].splice(j, 1)[0]
          if (aux.find(item => item.name === deleted.name) === undefined) {
            aux.push(deleted)
          }
        }
      }
    }

    const ret = arr.map(item => item.filter(item2 => aux.find(item3 => item3.name === item2.name) === undefined)) 

    return ({
      base: aux,
      branches: ret
    })
  }
  
  function getAllEvolutionChains(
    arr: { species: PokemonPreviewData, evolvesFrom: PokemonPreviewData}[]
  ) {
    let some = [...arr]
    let inn: PokemonPreviewData[] = []
    let prev = {id: 0, name: ''}
    let retArr: PokemonPreviewData[][] = []

    while (some.length !== 0) {
      const pkmn = some.find(item => item.evolvesFrom.name === prev.name)
      if (pkmn === undefined) {
        if (retArr.find(item => item.find(item2 => item2.name === prev.name)) === undefined) {
          retArr.push(inn)
        }
        some = some.filter(item => item.species !== prev)
        inn = []
        prev = {id: 0, name: ''}
      } else {
        inn.push(pkmn.species)
        prev = pkmn.species
      }
    }

    return retArr
  }

  const allSpecies = getAllSpeciesFromChain(chain)
  const allEvolutionChains = getAllEvolutionChains(allSpecies)
  const convergion = getConvergion(allEvolutionChains)

  return convergion
}