import { useEffect } from "react"
import { useParams } from "react-router-dom"

import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback"
import { CenteredFlexCol } from "../components/main-components"
import PaginationBar from "../components/PaginationBar"
import PokemonCard from "../components/poke-components/PokemonCard"
import PokemonDetails from "../components/poke-components/PokemonDetails"
import PokemonEvolutionChain from "../components/poke-components/PokemonEvolutionChain"
import PokemonVarieties from "../components/poke-components/PokemonVarieties"
import useSinglePokemonData from "../hooks/useSinglePokemonData"

// TODO: styling

function SinglePokemon() {
  const { id } = useParams()
  const pokemonId = Number(id)
  const { data, isLoading } = useSinglePokemonData(pokemonId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, [id]);
  
  if (isLoading) return <PokemonPageLoadingFeedback/>
  else if (data === null) return <h1>Sorry, no pokemon found.</h1>
    
  return (
    <CenteredFlexCol $gap="1.5rem">
      <PokemonCard
        name={data.name}
        spriteSrc={data.spriteSrc}
        types={data.types}
        pokedexEntries={data.pokedexEntries}
        abilities={data.abilities}
      />
      <PokemonDetails
        id={data.id}
        height={data.height}
        weight={data.weight}
        gen={data.gen}
        types={data.types}
        weaknesses={data.weaknesses}
      />
      <PokemonEvolutionChain 
        chainLink={data.evolutionChain}
        type={data.types[0]}
      />
      <PokemonVarieties 
        varieties={data.varieties} 
        type={data.types[0]}
      />
      <PaginationBar
        max={data.maxNumberOfPokemons}
        growth={3}
        current={data.id}
      />
    </CenteredFlexCol>
  )
}

export default SinglePokemon