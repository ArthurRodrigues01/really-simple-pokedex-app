import ArrayToJSXTransformer from "../components/ArrayToJSXTransformer"
import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback"
import FilteringMenu from "../components/FilteringMenu"
import { CenteredFlexCol, CenteredFlexRow, Title } from "../components/main-components"
import PokemonPreviewCard from "../components/poke-components/PokemonPreviewCard"
import { sanitizeTypes } from "../functions/poke-functions"
import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"

function Filtered() {
  const searchParams = useURLSearchParams()
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: Number(searchParams.gen),
    types: sanitizeTypes([searchParams.type1, searchParams.type2])
  }) 

  if (isLoading) return <PokemonPageLoadingFeedback/> 
  else if (previewData === null) return <Title $color="#fff">Sorry, no pokemons found, try less options or check if the current ones are typed correctly.</Title>

  return (
    <CenteredFlexCol $gap="1.5rem">
      <FilteringMenu/>
      <CenteredFlexRow $gap="1rem" $wrap>
        <ArrayToJSXTransformer
          dataArray={previewData}
          transformer={(pokemon) => (
            <PokemonPreviewCard 
              id={pokemon.id} 
              name={pokemon.name} 
              key={`pokemon-${pokemon.id}`}
            />
          )}
        />
      </CenteredFlexRow>
    </CenteredFlexCol>
  )
}

export default Filtered