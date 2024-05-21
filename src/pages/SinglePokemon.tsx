import { useEffect } from "react"
import { useParams } from "react-router-dom"

import PokemonCardLoadingFeedback from "../components/feedbacks/PokemonCardLoadingFeedback"
import PokemonCard from "../components/PokemonCard"
import PokemonEvolutionChain from "../components/PokemonEvolutionChain"
import PokemonVarieties from "../components/PokemonVarieties"
import PokePaginationBar from "../components/PokePaginationBar"
import { CenteredFlexColGap } from "../components/styles"
import useSinglePokemonData from "../hooks/useSinglePokemonData"

// TODO: styling

function SinglePokemon() {
  const { id } = useParams()
  const pokemonId = Number(id)
  const { data, isLoading } = useSinglePokemonData(pokemonId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, [id]);
  
  if (isLoading) return <PokemonCardLoadingFeedback id={pokemonId}/>
  else if (data === null) return <h1>Sorry, no pokemon found.</h1>
    
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
      
      <PokemonEvolutionChain 
        chainLink={data.evolutionChain}
        type={data.types[0]}
      />
      { data.isDefault && <PokemonVarieties varieties={data.varieties} type={data.types[0]}/> }
      <PokePaginationBar
        max={data.maxNumberOfPokemons}
        growth={3}
        current={data.id}
      />
    </CenteredFlexColGap>
  )
}

export default SinglePokemon