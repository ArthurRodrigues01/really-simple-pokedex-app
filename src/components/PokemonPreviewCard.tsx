import { useEffect, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { getPokemonData, getPokemonTypeColor } from "../functions/poke-functions";
import { PokemonData } from "../types/pokemon-related-types";
import PokemonPreviewCardLoadingFeedback from "./feedbacks/PokemonPreviewCardLoadingFeedback";
import { PokemonImage, PokemonImageWrapper, PokemonPreviewCardWrapper } from "./main-poke-components";
import { NoDecorationLink, Title } from "./main-components";
import { capitalize } from "../functions/other-functions";
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback";

function PokemonPreviewCard({ id, name }: { id: number, name: string }) {
  const { ref, isVisible } = useOnScreen()
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    if (isVisible && pokemonData === null) {
      getPokemonData(id).then(data => setPokemonData(data))
    }
  }, [isVisible]);

  if (pokemonData === null) {
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
          <PokemonImageWrapper>
            <PokemonImage src={pokemonData.spriteSrc} alt={`Pokemon ${pokemonData.id}`}/>
          </PokemonImageWrapper>
          <Title color="#fff">#{pokemonData.id}</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonPreviewCard