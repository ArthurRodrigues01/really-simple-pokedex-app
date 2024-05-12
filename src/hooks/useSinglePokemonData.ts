import { useQuery } from "@tanstack/react-query"

import { getPokemonData } from "../functions/poke-functions"
import { PokemonData } from "../types/pokemon-related-types"

function useSinglePokemonData(id: number, enabled = true): 
{ 
  data: PokemonData | null,
  isLoading: boolean
} {
  const { data, isLoading } = useQuery({ 
    queryKey: ['pokemonId', id],
    queryFn: async () => await getPokemonData(id),
    enabled: enabled
  })

  return {
    data: data ? data : null,
    isLoading
  }
}

export default useSinglePokemonData