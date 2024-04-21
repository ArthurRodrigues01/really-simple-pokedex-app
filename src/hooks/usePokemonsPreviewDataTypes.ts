import { useQuery } from "@tanstack/react-query"
import { getCommonItemsFromObjectArrays } from "../functions/other-functions"
import { NamedAPIResource, NamedAPIResourceList, PokemonPreviewData, PokemonsPreviewDataStatus } from "../types/pokemon-related-types"
import { sanitizeTypes, getPokemonPreviewDataFromArray, removeNonPokemonSpeciesObjectsFromArray } from "../functions/poke-functions"

function usePokemonsPreviewDataTypes(types: string[]): PokemonsPreviewDataStatus {
  const pokemonTypes = sanitizeTypes(types) 
  
  if (pokemonTypes.length === 0) {
    return ({
      previewData: null,
      isLoading: false
    })
  } 
  
  const { data, isLoading } = useQuery({
    queryKey: ['pokemonTypes', ...pokemonTypes],
    queryFn: async () => {
      const previewData = await getPokemonsPreviewDataFromTypes(pokemonTypes)

      return previewData && removeNonPokemonSpeciesObjectsFromArray(previewData)
    }
  }) 

  return ({
    previewData: data ? data : null,
    isLoading
  })
  async function getPokemonsPreviewDataFromTypes(types: string[]): Promise<PokemonPreviewData[] | null> {
    const res = await fetch(`https://pokeapi.co/api/v2/type`)
    const rawData: NamedAPIResourceList = await res.json()
    
    const typeObjs = rawData.results
    const typeFetchs = typeObjs.filter(typeObj => types.includes(typeObj.name))
  
    const resType1 = await fetch(typeFetchs[0].url)
    const rawDataType1 = await resType1.json()
    
    if (typeFetchs.length === 1) {
      return rawDataType1.pokemon.map((pokemonOfThisType: { 
        pokemon: NamedAPIResource, 
        slot: number 
      }) => ({
        id: Number(pokemonOfThisType.pokemon.url.split('/')[6]),
        name: pokemonOfThisType.pokemon.name
      }))
    }
    const resType2 = await fetch(typeFetchs[1].url)
    const rawDataType2 = await resType2.json()
    
    const pokemonResource1: NamedAPIResource[] = rawDataType1.pokemon.map((pokemonAndSlot: {
      pokemon: NamedAPIResource,
      slot: number
    }) => pokemonAndSlot.pokemon)
  
    const pokemonResource2: NamedAPIResource[] = rawDataType2.pokemon.map((pokemonAndSlot: {
      pokemon: NamedAPIResource,
      slot: number
    }) => pokemonAndSlot.pokemon)
  
    const commonItems: NamedAPIResource[] = getCommonItemsFromObjectArrays(pokemonResource1, pokemonResource2, 'name')
    
    return getPokemonPreviewDataFromArray(commonItems)
  }
}

export default usePokemonsPreviewDataTypes