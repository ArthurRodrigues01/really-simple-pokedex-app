import { useQuery } from "@tanstack/react-query"

import { PokemonPage } from "../types/pokemon-related-types"

function usePokemonVariety(link: string, enabled = true) {
  const { data, isLoading } = useQuery({
    queryKey: [link],
    queryFn: async () => {
      const res = await fetch(link)
      const rawData: PokemonPage = await res.json()

      return {
        name: rawData.name,
        types: rawData.types[0],
        spriteSrc: rawData.sprites.other["official-artwork"].front_default
      }
    },
    enabled: enabled
  })

  return {
    data: data ? data : null,
    isLoading
  }
}

export default usePokemonVariety