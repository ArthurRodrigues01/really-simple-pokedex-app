import { useQuery } from "@tanstack/react-query"
import { getPokemonData } from "../functions/poke-functions"
import { PokemonData } from "../types/pokemon-related-types"

function useSinglePokemonData(pokemonId: number): 
{ 
  data: PokemonData | null,
  isLoading: boolean
} {
  const { data, isLoading } = useQuery({ 
    queryKey: ['pokemonId', pokemonId],
    queryFn: async () => await getPokemonData(pokemonId)
  })

  return {
    data: data ? data : null,
    isLoading
  }
}

export default useSinglePokemonData