import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { getPokemonData, getPokemonTypeColor } from "../functions/poke-functions";
import { PokemonData } from "../types/pokemon-related-types";
import PokemonPreviewCardLoadingFeedback from "./feedbacks/PokemonPreviewCardLoadingFeedback";
import { PokemonImage, PokemonImageWrapper, PokemonPreviewCardWrapper } from "./main-poke-components";
import { NoDecorationLink, Title } from "./main-components";
import { capitalize } from "../functions/other-functions";

function PokemonPreviewCard({ id, name }: { id: number, name: string }) {
  const ref = useRef(null)
  const { isVisible } = useOnScreen(ref)
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
    <NoDecorationLink to={`/pokemon/${pokemonData.id}`}>
      <PokemonPreviewCardWrapper ref={ref} type={getPokemonTypeColor(pokemonData.types[0])}>
        <Title color="#fff">{capitalize(pokemonData.name)}</Title>
        <PokemonImageWrapper>
          <PokemonImage src={pokemonData.spriteSrc} alt={`Pokemon ${pokemonData.id}`}/>
        </PokemonImageWrapper>
        <Title color="#fff">#{pokemonData.id}</Title>
      </PokemonPreviewCardWrapper>
    </NoDecorationLink>
  )
}

export default PokemonPreviewCard