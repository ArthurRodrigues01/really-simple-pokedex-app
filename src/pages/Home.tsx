import { Link } from "react-router-dom";
import usePokemonsPreviewData from "../hooks/usePokemonsPreviewData";
import { useEffect, useState } from "react";
import { PokemonPreviewData } from "../types/pokemon-related-types";

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
  // if (isLoading === true && previewData === null) it is still loading
  // if (isLoading === false && previewData !== null) is has retrieved data
  // if (isLoading === false && previewData === null) it has no data to retrieve

  return (
    <>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
      {fetchedPokemons.map(fetchedPokemon => (
        <Link to={`/pokemon/${fetchedPokemon.id}`}  key={fetchedPokemon.id}>
          <div>
            <h3>{fetchedPokemon.name}</h3>
            <h3>{fetchedPokemon.id}</h3>
          </div>
        </Link>
      ))}
      {isLoading && <h1>...Loading more pokemons</h1>}
      </div>
      <button onClick={() => fetchNextPokemons()}>Fetch more</button>
    </>
  )
}

export default Home;