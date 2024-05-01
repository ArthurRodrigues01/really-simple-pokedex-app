import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { capitalize } from "../functions/other-functions";
import { getPokemonData, getPokemonTypeColor } from "../functions/poke-functions";
import useImagePreloader from "../hooks/useImagePreloader";
import useOnScreen from "../hooks/useOnScreen";
import { PokemonData } from "../types/pokemon-related-types";
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback";
import PokemonPreviewCardLoadingFeedback from "./feedbacks/PokemonPreviewCardLoadingFeedback";
import { NoDecorationLink, Title } from "./main-components";
import { PokemonPreviewCardWrapper, PokemonSprite, PokemonSpriteWrapper } from "./main-poke-components";

function PokemonPreviewCard({ id, name }: { id: number, name: string }) {
  const queryClient = useQueryClient()
  const { ref, isVisible } = useOnScreen()
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)
  const { hasLoaded } = useImagePreloader(pokemonData ? pokemonData.spriteSrc : '')

  useEffect(() => {
    if (isVisible && pokemonData === null) {
      queryClient.fetchQuery({
        queryKey: ['pokemonId', id],
        queryFn: async () => await getPokemonData(id)
      }).then(data => setPokemonData(data))
    }
  }, [isVisible]);

  if (pokemonData === null || hasLoaded === false) {
    return (
      <PokemonPreviewCardLoadingFeedback ref={ref} name={name} id={id}/>
    )
  }

  return (
    <HoverableGrowthFeedback 
      borderBottomRightRadius={16} 
      borderTopLeftRadius={16}
    >
      <NoDecorationLink to={`/pokemon/${pokemonData.id}`}>
        <PokemonPreviewCardWrapper ref={ref} type={getPokemonTypeColor(pokemonData.types[0])}>
          <Title color="#fff">{capitalize(pokemonData.name)}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={pokemonData.spriteSrc} alt={`Pokemon ${pokemonData.id}`}/>
          </PokemonSpriteWrapper>
          <Title color="#fff">#{pokemonData.id}</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonPreviewCard