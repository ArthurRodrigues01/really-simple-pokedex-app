import { useInfiniteQuery } from "@tanstack/react-query"
import { NamedAPIResourceList } from "../types/pokemon-related-types"
import { getPokemonPreviewDataFromArray } from "../functions/poke-functions"

function useInfinitePokemonsPreviewData(limit = 20) {
  const initialFetch = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=${limit}`

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ['pokemonPage'],
    initialPageParam: initialFetch,
    queryFn: async ({ pageParam }) => await getPokemonsPreviewData(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextFetch
  })

  return {
    previewData: data ? data.pages.map(page => page.previewData).flat() : null,
    isLoadingRequest: isLoading,
    isLoadingMorePokemons: isFetchingNextPage,
    fetchNextPokemons: hasNextPage ? fetchNextPage : () => {},
  }

  async function getPokemonsPreviewData(url: string) {
    const res = await fetch(url)
    const rawData: NamedAPIResourceList = await res.json()

    return {
      previewData: getPokemonPreviewDataFromArray(rawData.results),
      nextFetch: rawData.next 
    }
  }
}

export default useInfinitePokemonsPreviewData