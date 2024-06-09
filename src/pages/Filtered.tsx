import ArrayToJSXTransformer from "../components/ArrayToJSXTransformer"
import FilteringOptionsUI from "../components/FilteringOptionsUI"
import { CenteredFlexCol } from "../components/main-components"
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

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (previewData === null) {
    return <h1>Sorry, no pokemons found, try less options or check if the current ones are typed correctly.</h1>
  }

  return (
    <CenteredFlexCol $gap="1.5rem">
      <FilteringOptionsUI/>
      <div style={{display: "flex", flexDirection: 'row', flexFlow: 'wrap', gap: 16}}>
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
      </div>
    </CenteredFlexCol>
  )
}

export default Filtered