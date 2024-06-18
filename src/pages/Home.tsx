import { useEffect } from "react";

import PokemonLoadingMoreFeedback from "../components/feedbacks/PokemonLoadingMoreFeedback";
import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback";
import { CenteredFlexCol, CenteredFlexRow, Title } from "../components/main-components";
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
    <CenteredFlexCol $gap="2rem">
      <CenteredFlexRow $gap="1rem" $wrap>
        {previewData.map(pokemon => (
          <PokemonPreviewCard 
            id={pokemon.id} 
            name={pokemon.name} 
            key={`pokemon-${pokemon.id}`}
          />
        ))}
      </CenteredFlexRow>
      <div ref={ref}>{isLoadingMorePokemons && <PokemonLoadingMoreFeedback/>}</div>
    </CenteredFlexCol>
  )
}

export default Home;