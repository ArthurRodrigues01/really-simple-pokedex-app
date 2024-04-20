import usePokemonsPreviewData from "../hooks/usePokemonsPreviewData";
import { useEffect, useState } from "react";
import { PokemonPreviewData } from "../types/pokemon-related-types";
import PokemonPreviewCard from "../components/PokemonPreviewCard";

function Home() {
  const { previewData, isLoading, fetchNextPokemons } = usePokemonsPreviewData(200)
  const [fetchedPokemons, setFetchedPokemons] = useState<PokemonPreviewData[]>([]);

  useEffect(() => {
    if (previewData !== null) {
      setFetchedPokemons([...fetchedPokemons, ...previewData])
    }
  }, [previewData]);

  if (fetchedPokemons.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
      {fetchedPokemons.map(fetchedPokemon => (
        <PokemonPreviewCard 
          id={fetchedPokemon.id} 
          name={fetchedPokemon.name} 
          key={`pokemon-${fetchedPokemon.id}`}
        />
      ))}
      {isLoading && <h1>...Loading more pokemons</h1>}
      </div>
      <button onClick={() => fetchNextPokemons()}>Fetch more</button>
    </>
  )
}

export default Home;