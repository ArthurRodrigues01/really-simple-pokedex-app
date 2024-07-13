import { useQueries } from "@tanstack/react-query"
import { useMemo } from "react"

import { getCommonItemsFromObjectArrays } from "../functions/other-functions"
import {
  getPokemonPreviewDataFromArray,
  removeNonSpeciesFromArray
} from "../functions/poke-functions"
import { PokemonTypePage } from "../types/pokemon-api-page-types"
import {
  NamedAPIResource,
  NamedAPIResourceList,
  PokemonsPreviewDataStatus
} from "../types/pokemon-related-types"

function usePokemonsPreviewDataTypes(types: string[]): PokemonsPreviewDataStatus {
  const results = useQueries({
    queries: types.map(type => ({
      queryKey: ['pokemonType', type],
      queryFn: async () => {
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
    }))
  })

  const { data, isLoading } = useMemo(() => ({
    data: results.map(result => result.data).filter( item => item !== undefined ),
    isLoading: results.some(result => result.isLoading)
  }), [results])

  const reducedData = data.reduce((prev, curr, index) => {
    if (index === 0) return curr
    
    return getCommonItemsFromObjectArrays(prev, curr, 'name')
  }, [])

  return ({
    previewData: reducedData.length !== 0 ? removeNonSpeciesFromArray(reducedData) : null,
    isLoading
  })
}

export default usePokemonsPreviewDataTypes