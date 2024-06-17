import { useEffect } from "react";

import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback";
import { Title } from "../components/main-components";
import PokemonPreviewCard from "../components/poke-components/PokemonPreviewCard";
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

  if (isLoadingRequest) return <PokemonPageLoadingFeedback/>
  else if (previewData === null) return <Title $color="#fff">Something went wrong, perhaps refreshing the page will sort everything out.</Title>

  return (
    <>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
        {previewData.map(pokemon => (
          <PokemonPreviewCard 
            id={pokemon.id} 
            name={pokemon.name} 
            key={`pokemon-${pokemon.id}`}
          />
        ))}
      </div>
      <div ref={ref}>{isLoadingMorePokemons && <h1>Loading more pokemons...</h1>}</div>
    </>
  )
}

export default Home;