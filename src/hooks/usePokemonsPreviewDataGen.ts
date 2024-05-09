import { useQuery } from "@tanstack/react-query"

import { isInRange, isNaturalNumber } from "../functions/other-functions"
import { getPokemonPreviewDataFromArray } from "../functions/poke-functions"
import { GenPage, PokemonsPreviewDataStatus } from "../types/pokemon-related-types"

function usePokemonsPreviewDataGen(gen: number): PokemonsPreviewDataStatus {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemonGen', gen],
    queryFn: async () => {
      if (isNaturalNumber(gen) === false || isInRange(gen, 9) === false) {
        return null
      }
      
      const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
      const rawData: GenPage = await res.json()
  
      return getPokemonPreviewDataFromArray(rawData.pokemon_species)
    }
  })

  return ({
    previewData: data ? data : null,
    isLoading
  })
}

export default usePokemonsPreviewDataGen