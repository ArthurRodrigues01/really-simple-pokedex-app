import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"
import PokemonPreviewCard from "../components/PokemonPreviewCard"

function Filtered() {
  const searchParams = useURLSearchParams()
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: Number(searchParams.gen),
    types: [searchParams.type1, searchParams.type2]
  }) 

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (previewData === null) {
    return <h1>Sorry, no pokemons found, try less options or check if the current ones are typed correctly.</h1>
  }

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