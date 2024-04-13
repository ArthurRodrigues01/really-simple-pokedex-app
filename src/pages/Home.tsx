import { Link } from "react-router-dom";
import usePokemonsPreviewData from "../hooks/usePokemonsPreviewData";
import { useEffect, useState } from "react";
import { PokemonPreviewData } from "../types/pokemon-related-types";

function Home() {
  const { previewData, isLoading, fetchNextPokemons } = usePokemonsPreviewData(200)

  if (previewData === null && !isLoading){
    return <h1>Sorry, no pokemons found</h1>
  }

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
      {isLoading && <h1>...Loading</h1>}
      </div>
      <button onClick={() => fetchNextPokemons()}>Fetch more</button>
    </>
  )
}

export default Home;