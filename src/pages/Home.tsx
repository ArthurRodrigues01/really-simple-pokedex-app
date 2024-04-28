import { useEffect } from "react";
import PokemonPreviewCard from "../components/PokemonPreviewCard";
import useInfinitePokemonsPreviewData from "../hooks/useInfinitePokemonsPreviewData";
import useOnScreen from "../hooks/useOnScreen";

function Home() {
  const { 
    previewData, 
    isLoadingRequest, 
    isLoadingMorePokemons, 
    fetchNextPokemons 
  } = useInfinitePokemonsPreviewData(250)

  const { ref, isVisible } = useOnScreen()

  useEffect(() => {
    if (isVisible && isLoadingMorePokemons === false) {
      fetchNextPokemons()
    }
  }, [isVisible]);

  if (isLoadingRequest) {
    return <h1>Loading...</h1>
  }
  else if (previewData === null) {
    return <h1>Something went wrong, perhaps refreshing the page will sort everything out.</h1>
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
      <div ref={ref}>{isLoadingMorePokemons && <h1>Loading more pokemons...</h1>}</div>
    </>
  )
}

export default Home;