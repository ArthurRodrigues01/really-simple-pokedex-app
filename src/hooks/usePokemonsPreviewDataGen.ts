import { useQuery } from "@tanstack/react-query"
import { isInRange, isNaturalNumber } from "../functions/other-functions"
import { Generation, PokemonsPreviewDataStatus } from "../types/pokemon-related-types"

function usePokemonsPreviewDataGen(gen: number): PokemonsPreviewDataStatus {
  // Param handling
  if (isNaturalNumber(gen) === false && isInRange(gen, 9) === false) return ({
    previewData: null,
    isLoading: false
  })

  const { data, isLoading } = useQuery({
    queryKey: [gen],
    queryFn: async () => await getPokemonsPreviewDataFromGen(gen)
  })

  return ({
    previewData: data ? data : null,
    isLoading
  })

  async function getPokemonsPreviewDataFromGen(gen: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
    const rawData: Generation = await res.json()

    return rawData.pokemon_species.map(pokemonSpecie => ({
      id: Number(pokemonSpecie.url.split('/')[6]),
      name: pokemonSpecie.name
    }))
  }
}

export default usePokemonsPreviewDataGen