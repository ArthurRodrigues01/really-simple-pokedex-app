import { useParams } from "react-router-dom"
import useSinglePokemonData from "../hooks/useSinglePokemonData"
import PokemonCard from "../components/PokemonCard"
import PokemonCardLoadingFeedback from "../components/feedbacks/PokemonCardLoadingFeedback"

// TODO: styling

function SinglePokemon() {
  const { id } = useParams()
  const pokemonId = Number(id)
  const { data, isLoading } = useSinglePokemonData(pokemonId)
    
  if (isLoading) return <PokemonCardLoadingFeedback id={pokemonId}/>
  else if (data === null) return <h1>Sorry, no pokemon found with this id.</h1>
    
  return (
    <PokemonCard
      id={data.id}
      name={data.name}
      gen={data.gen}
      height={data.height}
      weight={data.weight}
      spriteSrc={data.spriteSrc}
      types={data.types}
      pokedexEntries={data.pokedexEntries}
      maxNumberOfPokemons={data.maxNumberOfPokemons}
    />
  )
}

export default SinglePokemon