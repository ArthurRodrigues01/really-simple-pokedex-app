import { useState, useCallback } from 'react';
import { NamedAPIResourceList, PokemonsPreviewDataStatus } from '../types/pokemon-related-types';
import { useQuery } from '@tanstack/react-query';
import { getPokemonPreviewDataFromArray } from '../functions/poke-functions';


function usePokemonsPreviewData(limit = 20): PokemonsPreviewDataStatus & { fetchNextPokemons: () => void } {
  const initialFetch = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=${limit}`
  const [nextFetch, setNextFetch] = useState(initialFetch)
  const { data, isLoading } = useQuery({
    queryKey: [nextFetch],
    queryFn: async () => {
      const res = await fetch(nextFetch)
      const rawData: NamedAPIResourceList = await res.json()
      
      return {
        previewData: getPokemonPreviewDataFromArray(rawData.results),
        nextFetch: rawData.next
      }
    }
  })

  const fetchNextPokemons = useCallback(() => {
    if (data && data.nextFetch) {
      setNextFetch(data.nextFetch)
    }
  }, [data])

  return { 
    previewData: data ? data.previewData : null,
    isLoading,
    fetchNextPokemons
  } 
}

export default usePokemonsPreviewData