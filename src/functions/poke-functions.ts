import { VALID_TYPES } from "../constants/pokemon-related-constants";
import {
  AbilityPage,
  EvolutionChainPage,
  PokemonFormPage,
  PokemonPage,
  PokemonTypePage,
  SpeciesPage,
  VersionGroupPage
} from "../types/pokemon-api-page-types";
import {
  ChainLink,
  NamedAPIResource,
  NamedAPIResourceList,
  PokemonData,
  PokemonPreviewData,
  TypeRelations,
  Variety
} from "../types/pokemon-related-types";
import { capitalize, isInRange, isNaturalNumber } from "./other-functions";

export async function getPokemonData(id: number): Promise<PokemonData | null> {
  const maxNumberOfPokemons = await getMaxNumberOfSpecies()

  if (await isValidVarietyId(id) === false) return null

  const rawPokemonPageData: PokemonPage = await getPokemonPageData(id)
  const rawSpeciesPageData: SpeciesPage = await getSpeciesPageData(rawPokemonPageData.species.url)

  const resEvolutionChainPageData = await fetch(rawSpeciesPageData.evolution_chain.url)
  const rawEvolutionChainPageData: EvolutionChainPage = await resEvolutionChainPageData.json() 

  const nonHiddenPokemonAbilities = rawPokemonPageData.abilities.filter(item => item.is_hidden === false)

  const resAbilityPageDataArray = await Promise.all(nonHiddenPokemonAbilities.map(item => fetch(item.ability.url)))
  const rawAbilityPageDataArray: AbilityPage[] = await Promise.all(resAbilityPageDataArray.map(item => item.json()))

  const resPokemonTypePageDataArray = await Promise.all(rawPokemonPageData.types.map(item => fetch(item.type.url)))
  const rawPokemonTypePageDataArray: PokemonTypePage[] = await Promise.all(resPokemonTypePageDataArray.map(item => item.json()))

  const pokemonWeaknesses = getPokemonWeaknesses(rawPokemonTypePageDataArray.map(item => item.damage_relations))
  
  const pokemonTypes = rawPokemonPageData.types.map(item => item.type.name)

  const pokemonAbilities = rawAbilityPageDataArray.map(item => {
    const abilityNameEnglish = item.names.find(item2 => item2.language.name === 'en')
    const abilityDescriptionsEnglish = item.flavor_text_entries.filter(item2 => item2.language.name === 'en')

    const abilityName = capitalize(abilityNameEnglish ? abilityNameEnglish.name : item.name)
    const abilityDescription = abilityDescriptionsEnglish[abilityDescriptionsEnglish.length - 1].flavor_text

    return {
      name: abilityName,
      description: abilityDescription
    }
  })

  const pokedexEntries = rawSpeciesPageData.flavor_text_entries.filter(
    pokemonEntryObj => pokemonEntryObj.language.name === 'en'
  )

  return {
    id: rawSpeciesPageData.id,
    gen: getGenIdEtcFromPokeURL(rawSpeciesPageData.generation.url),
    name: capitalize(rawSpeciesPageData.name),
    weight: rawPokemonPageData.weight / 10, // ??? -> KG
    height: rawPokemonPageData.height /10, // Decimeters -> Meters
    types: pokemonTypes,
    weaknesses: pokemonWeaknesses,
    spriteSrc: rawPokemonPageData.sprites.other["official-artwork"].front_default,
    pokedexEntries: pokedexEntries,
    maxNumberOfPokemons: maxNumberOfPokemons,
    varieties: rawSpeciesPageData.varieties,
    evolutionChain: rawEvolutionChainPageData.chain,
    isDefault: rawPokemonPageData.is_default,
    abilities: pokemonAbilities
  }
}

export async function getPokemonVarietyData(id: number) {
  const rawPokemonPageData: PokemonPage = await getPokemonPageData(id)
  const rawSpeciesPageData: SpeciesPage = await getSpeciesPageData(rawPokemonPageData.species.url)

  const resPokemonFormPageData = await fetch(rawPokemonPageData.forms[0].url)
  const rawPokemonFormPageData: PokemonFormPage  = await resPokemonFormPageData.json()
  
  const resVersionGroupPageData = await fetch(rawPokemonFormPageData.version_group.url)
  const rawVersionGroupPageData: VersionGroupPage = await resVersionGroupPageData.json()
  
  const pokedexEntries = rawSpeciesPageData.flavor_text_entries.map(item => item.language.name === 'en')
  
  const pokemonTypes = rawPokemonPageData.types.map(item => item.type.name)

  const completeVarietyName = rawPokemonFormPageData.names.find(item => item.language.name === 'en')
  const formName = rawPokemonFormPageData.form_names.find(item => item.language.name === 'en')
  const speciesName = capitalize(rawSpeciesPageData.name)

  const gen = getGenIdEtcFromPokeURL(rawVersionGroupPageData.generation.url)


  return {
    id: rawSpeciesPageData.id,
    gen: gen,
    name: completeVarietyName ? completeVarietyName.name : formName ? `${formName.name} ${speciesName}` : capitalize(rawSpeciesPageData.name),
    weight: rawPokemonPageData.weight / 10, // ??? -> KG
    height: rawPokemonPageData.height /10, // Decimeters -> Meters
    types: pokemonTypes,
    spriteSrc: rawPokemonPageData.sprites.other["official-artwork"].front_default,
    pokedexEntries: pokedexEntries,
    varieties: rawSpeciesPageData.varieties,
  }
}

export async function getSpeciesPageData(fetchable: number | string) {
  const res = await fetch(
    typeof fetchable === 'number' ? 
    `https://pokeapi.co/api/v2/pokemon-species/${fetchable}` : 
    fetchable
  )
  const rawData: SpeciesPage = await res.json()

  return rawData
}
export async function getPokemonPageData(fetchable: number | string) {
  const res = await fetch(
    typeof fetchable === 'number' ? 
    `https://pokeapi.co/api/v2/pokemon/${fetchable}` : 
    fetchable
  )
  const rawData: PokemonPage = await res.json()

  return rawData
}

export function getGenIdEtcFromPokeURL(url: string) {
  return Number(url.split('/')[6])
}

export async function getAllSpeciesPreview() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=10000')
  const rawData: NamedAPIResourceList = await res.json()

  const allPokemonsSortedAlpha = rawData.results.sort((a, b) => a.name.localeCompare(b.name))


  return allPokemonsSortedAlpha.map(item => ({ ...item, name: capitalize(item.name) }))
}

export async function getMaxNumberOfSpecies(): Promise<number> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/')
  const rawData: NamedAPIResourceList = await res.json()

  return rawData.count
}
export async function getNonSpeciesLastIndex(): Promise<number> {
  const maxNumberOfSpecies = await getMaxNumberOfSpecies()
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const rawData: NamedAPIResourceList = await res.json()

  return rawData.count - maxNumberOfSpecies + 10000
}

export function getPokemonPreviewDataFromArray(arr: NamedAPIResource[]): PokemonPreviewData[] {
  return arr.map(item => ({
    id: Number(item.url.split('/')[6]),
    name: capitalize(item.name)
  }))
}

export function removeNonSpeciesFromArray(arr: PokemonPreviewData[]): PokemonPreviewData[] {
  return arr.filter(item => item.id < 10000)
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

export async function isValidVarietyId(id: number) {
  const maxPokemons = await getMaxNumberOfSpecies()
  
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
      return '#749e0e'
    case 'dark': 
      return '#3b3943' 
    case 'dragon':
      return '#004baa'  
    case 'electric':
      return '#d4bb30'  
    case 'fairy':
      return '#d072c8'  
    case 'fighting':
      return '#b0283c'  
    case 'fire':
      return '#e17612'  
    case 'flying':
      return '#839dce'  
    case 'ghost':
      return '#414f9e'  
    case 'grass':
      return '#419f3a'  
    case 'ground':
      return '#b36827'  
    case 'ice':
      return '#57b2a3'  
    case 'normal':
      return '#828481'  
    case 'poison':
      return '#7f00cd'  
    case 'psychic':
      return '#dc6763'  
    case 'rock':
      return '#ab9d6c'  
    case 'steel':
      return '#387785'  
    case 'water':
      return '#357fc1'
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

export function getVarieties(varieties: Variety[]) {
  const ret = varieties.filter(variety => variety.is_default === false)
  const nra = ret.map(item => item.pokemon)
  
  return getPokemonPreviewDataFromArray(nra)
}

export async function getSearchBarPokemonsPreview(query: string) {
  const allPokemonsPreview = await getAllSpeciesPreview()

  const preview = allPokemonsPreview.filter(item => item.name.startsWith(query))

  return preview.slice(0,6)
}

function getPokemonWeaknesses(pokemonTypeRelationsArray: TypeRelations[]) {
  const firstTypeWeaknesses = pokemonTypeRelationsArray[0].double_damage_from
  const secondTypeWeaknesses = (
    pokemonTypeRelationsArray.length === 2 ? 
    pokemonTypeRelationsArray[1].double_damage_from : 
    null
  )
  const firstTypeResistances = [
    ...pokemonTypeRelationsArray[0].half_damage_from, 
    ...pokemonTypeRelationsArray[0].no_damage_from
  ]
  const secondTypeResistances = (
    pokemonTypeRelationsArray.length === 2 ?
    [
      ...pokemonTypeRelationsArray[1].half_damage_from, 
      ...pokemonTypeRelationsArray[1].no_damage_from
    ] :
    null
  )


  if (secondTypeWeaknesses !== null && secondTypeResistances !== null) {
    // check weaknesses of a type, for each weakness if not a resistance/immunity of the other type, 
    // than it is a pokemon's weakness
    const firstTypeTrueWeaknesses = firstTypeWeaknesses.filter(item => secondTypeResistances.find(item2 => item2.name === item.name) === undefined)
    // console.log(firstTypeTrueWeaknesses)
    const secondTypeTrueWeaknesses = secondTypeWeaknesses.filter(item => firstTypeResistances.find(item2 => item2.name === item.name) === undefined)
    // console.log(secondTypeTrueWeaknesses)
    
    const pokemonWeaknesses = [...firstTypeTrueWeaknesses, ...secondTypeTrueWeaknesses]
    
    const pokemonWeaknessesNoDupes = pokemonWeaknesses.filter(
      (item, index, array) => array.findIndex(item2 => item2.name === item.name) === index
    )

    return pokemonWeaknessesNoDupes.map(item => item.name)
  } 

  return firstTypeWeaknesses.map(item => item.name)
}