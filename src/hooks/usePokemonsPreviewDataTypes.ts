import { useQueries } from "@tanstack/react-query"
import { getCommonItemsFromObjectArrays } from "../functions/other-functions"
import { NamedAPIResource, NamedAPIResourceList, PokemonPreviewData, PokemonTypePage, PokemonsPreviewDataStatus } from "../types/pokemon-related-types"
import { sanitizeTypes, getPokemonPreviewDataFromArray, removeNonPokemonSpeciesObjectsFromArray } from "../functions/poke-functions"
import { useMemo } from "react"

function usePokemonsPreviewDataTypes(types: string[]): PokemonsPreviewDataStatus {
  const pokemonTypes = sanitizeTypes(types) 
  
  if (pokemonTypes.length === 0) {
    return ({
      previewData: null,
      isLoading: false
    })
  } 
  
  const results = useQueries({
    queries: pokemonTypes.map(type => ({
      queryKey: ['pokemonType', type],
      queryFn: async () => await getPokemonsPreviewDataFromType(type)
    }))
  })

  const { data, isLoading } = useMemo(() => ({
    data: results.map(result => result.data ? result.data : null).filter(
      item => item !== null // weird typescript bug (I think), even though I filtered the array so that there could be no null value, it still says there could be null values on the array which is absurd
    ),
    isLoading: results.some(result => result.isLoading)
  }), [results])

  const combinedData = data.reduce((prev, curr, index) => {
    if (index === 0) return curr
    
    return getCommonItemsFromObjectArrays(prev!, curr!, 'name')
  }, [])

  return ({
    previewData: combinedData!.length !== 0 ? removeNonPokemonSpeciesObjectsFromArray(combinedData!) : null,
    isLoading
  })
  async function getPokemonsPreviewDataFromType(type: string): Promise<PokemonPreviewData[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/type`)
    const rawData: NamedAPIResourceList = await res.json()
    
    const typeObjs = rawData.results
    const typeFetch = typeObjs.find(typeObj => typeObj.name === type)!
  
    const resType = await fetch(typeFetch.url)
    const rawDataType: PokemonTypePage = await resType.json()
    
    const pokemonsSrc: NamedAPIResource[] = rawDataType.pokemon.map(
      pokemonAndSlot => pokemonAndSlot.pokemon
    )

    return getPokemonPreviewDataFromArray(pokemonsSrc)
  }
}

export default usePokemonsPreviewDataTypes