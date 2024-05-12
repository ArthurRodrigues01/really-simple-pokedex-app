import { useParams } from "react-router-dom"

import EvolutionChain from "../components/EvolutionChain"
import PokemonCardLoadingFeedback from "../components/feedbacks/PokemonCardLoadingFeedback"
import PokemonCard from "../components/PokemonCard"
import PokePaginationBar from "../components/PokePaginationBar"
import { CenteredFlexColGap } from "../components/styles"
import { getPokemonWrapperTypeColor } from "../functions/poke-functions"
import useSinglePokemonData from "../hooks/useSinglePokemonData"

// TODO: styling

function SinglePokemon() {
  const { id } = useParams()
  const pokemonId = Number(id)
  const { data, isLoading } = useSinglePokemonData(pokemonId)
  
  if (isLoading) return <PokemonCardLoadingFeedback id={pokemonId}/>
  else if (data === null) return <h1>Sorry, no pokemon found with this id.</h1>
    
  return (
    <CenteredFlexColGap>
      <PokemonCard
        id={data.id}
        name={data.name}
        gen={data.gen}
        height={data.height}
        weight={data.weight}
        spriteSrc={data.spriteSrc}
        types={data.types}
        pokedexEntries={data.pokedexEntries}
      />
      
      <PokePaginationBar
        max={data.maxNumberOfPokemons}
        growth={3}
        current={data.id}
      />
      <EvolutionChain 
        chainLink={data.evolutionChain} 
        color={getPokemonWrapperTypeColor(data.types[0])}
      />
    </CenteredFlexColGap>
  )
}

export default SinglePokemon