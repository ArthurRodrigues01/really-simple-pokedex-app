import { useQuery } from "@tanstack/react-query"

import { getPokemonVarietyData } from "../functions/poke-functions"

function usePokemonVariety(id: number, enabled = true) {
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => await getPokemonVarietyData(id),
    enabled: enabled
  })

  return {
    data: data ? data : null,
    isLoading
  }
}

export default usePokemonVariety