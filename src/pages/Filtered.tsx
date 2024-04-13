import { Link } from "react-router-dom"
import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"

function Filtered() {
  const searchParams = useURLSearchParams()
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: Number(searchParams.gen),
    types: [searchParams.type1, searchParams.type2].filter(item => item)
  }) 

  if (previewData === null) {
    return isLoading ? 
    <h1>Loading...</h1> : 
    <h1>Sorry, no pokemons found, you might have mistyped the gen or the pokemons types</h1>
  }
  if (previewData.length === 0) return <h1>Sorry, no pokemons found</h1>

  return (
    <>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
      {previewData.map(pokemonPreviewData => (
        <Link to={`/pokemon/${pokemonPreviewData.id}`}>
          <div>
            <h3>{pokemonPreviewData.name}</h3>
            <h3>{pokemonPreviewData.id}</h3>
          </div>
        </Link>
      ))}
      </div>
    </>
  )
}

export default Filtered