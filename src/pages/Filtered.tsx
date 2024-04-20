import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"
import PokemonPreviewCard from "../components/PokemonPreviewCard"

function Filtered() {
  const searchParams = useURLSearchParams()
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: Number(searchParams.gen),
    types: [searchParams.type1, searchParams.type2]
  }) 
  
  if (previewData === null) {
    return isLoading ? 
    <h1>Loading...</h1> :
    <h1>Sorry, no pokemons found, you might have mistyped the gen or the pokemons' types</h1>
  }
  if (previewData.length === 0) return <h1>Sorry, no pokemons found</h1>

  return (
    <>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
      {previewData.map(fetchedPokemon => (
        <PokemonPreviewCard 
          id={fetchedPokemon.id}
          name={fetchedPokemon.name}
          key={`pokemon-${fetchedPokemon.id}`}
        />
      ))}
      </div>
    </>
  )
}

export default Filtered