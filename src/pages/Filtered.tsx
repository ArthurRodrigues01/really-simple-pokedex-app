import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback"
import FilteringMenu from "../components/FilteringMenu"
import { CenteredFlexCol, CenteredFlexRow, Title } from "../components/main-components"
import PokemonPreviewCard from "../components/poke-components/PokemonPreviewCard"
import { sanitizeTypes } from "../functions/poke-functions"
import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"

function Filtered() {
  const searchParams = useURLSearchParams()
  const gen = Number(searchParams.gen)
  const types = sanitizeTypes([searchParams.type1, searchParams.type2])
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: gen,
    types: types
  }) 

  if (isLoading) return (
    <CenteredFlexCol $gap='1.5rem'>
      <FilteringMenu/>
      <PokemonPageLoadingFeedback/>
    </CenteredFlexCol>
  )
  else if (previewData === null) return (
    <CenteredFlexCol $gap='1.5rem'>
      <FilteringMenu/>
      <Title>Sorry, no pokemons found, try less options or check if the current ones are typed correctly.</Title>
    </CenteredFlexCol>
  )
  
  return (
    <CenteredFlexCol $gap="1.5rem">
      <FilteringMenu/>
      <CenteredFlexRow $gap="1rem" $wrap>
        {previewData.map(pokemon => (
          <PokemonPreviewCard 
            id={pokemon.id} 
            name={pokemon.name} 
            key={`pokemon-${pokemon.id}`}
          />
        ))}
      </CenteredFlexRow>
    </CenteredFlexCol>
  )
}

export default Filtered