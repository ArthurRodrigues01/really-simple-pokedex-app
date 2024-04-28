import { useQuery } from "@tanstack/react-query"
import { isInRange, isNaturalNumber } from "../functions/other-functions"
import { GenPage, PokemonsPreviewDataStatus } from "../types/pokemon-related-types"
import { getPokemonPreviewDataFromArray } from "../functions/poke-functions"

function usePokemonsPreviewDataGen(gen: number): PokemonsPreviewDataStatus {
  // Param handling
  if (isNaturalNumber(gen) === false && isInRange(gen, 9) === false) return ({
    previewData: null,
    isLoading: false
  })

  const { data, isLoading } = useQuery({
    queryKey: ['pokemonGen', gen],
    queryFn: async () => await getPokemonsPreviewDataFromGen(gen)
  })

  return ({
    previewData: data ? data : null,
    isLoading
  })

  async function getPokemonsPreviewDataFromGen(gen: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
    const rawData: GenPage = await res.json()

    return getPokemonPreviewDataFromArray(rawData.pokemon_species)
  }
}

export default usePokemonsPreviewDataGen