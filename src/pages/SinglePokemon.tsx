import { getGenRegion } from "../functions/poke-functions"
import { capitalize } from "../functions/other-functions"
import { Link, useParams } from "react-router-dom"
import useSinglePokemonData from "../hooks/useSinglePokemonData"

// TODO: styling

function SinglePokemon() {
  const { id } = useParams()
  const pokemonId = Number(id)
  const { data, isLoading } = useSinglePokemonData(pokemonId)
    
  if (isLoading) return <h1>Loading...</h1>
  else if (data === null) return <h1>Sorry, no pokemon found with this id.</h1>

  return (
    <>
      <div>
        <h1>{capitalize(data.name)}</h1>
        <img src={`${data?.spriteSrc}`} width={250} height={250}/>
        <h2>ID: {data.id}</h2>
        <h2>Gen: {data.gen}{`(${getGenRegion(data.gen)})`}</h2>
        <h2>Height: {data.height}m</h2>
        <h2>Weight: {data.weight}kg</h2>
        <h2>Types: </h2>
        {data.types.map(type => <h3>{type}</h3>)}
        <h2>Pokedex Entry: </h2>
        <h3>{data.pokedexEntries[0]?.flavor_text}</h3>
      </div>
      <div>
        {  pokemonId - 1 != 0 && <Link to={`/pokemon/${pokemonId - 1}`}><h1>{pokemonId - 1}</h1></Link> }
        {  pokemonId + 1 != data.maxNumberOfPokemons + 1 && <Link to={`/pokemon/${pokemonId + 1}`}><h1>{pokemonId + 1}</h1></Link> }
        
      </div>
    </>
  )
}

export default SinglePokemon