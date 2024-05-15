import { useEffect, useState } from "react";

import { capitalize } from "../functions/other-functions";
import { getPokemonTypeColor } from "../functions/poke-functions";
import useImagePreloader from "../hooks/useImagePreloader";
import useOnScreen from "../hooks/useOnScreen";
import useSinglePokemonData from "../hooks/useSinglePokemonData";
import HoverableGrowthFeedback from "./feedbacks/HoverableGrowthFeedback";
import PokemonPreviewCardLoadingFeedback from "./feedbacks/PokemonPreviewCardLoadingFeedback";
import { NoDecorationLink, Title } from "./main-components";
import {
  PokemonPreviewCardWrapper,
  PokemonSprite,
  PokemonSpriteWrapper
} from "./main-poke-components";

function PokemonPreviewCard({ id, name }: { id: number, name: string }) {
  const { ref, isVisible } = useOnScreen()
  const [enabled, setEnabled] = useState(false)
  const { data, isLoading } = useSinglePokemonData(id, enabled)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')

  useEffect(() => {
    if (isVisible && data === null) {
      setEnabled(true)
    }
  }, [isVisible]);

  if (data === null || hasLoaded === false || isLoading) {
    return (
      <PokemonPreviewCardLoadingFeedback ref={ref} name={name} id={id}/>
    )
  }

  return (
    <HoverableGrowthFeedback 
      borderBottomRightRadius={16} 
      borderTopLeftRadius={16}
    >
      <NoDecorationLink to={`/pokemon/${data.id}`}>
        <PokemonPreviewCardWrapper ref={ref} $backgroundColor={getPokemonTypeColor(data.types[0])}>
          <Title $color="#fff">{capitalize(data.name)}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={data.spriteSrc} alt={`Pokemon ${data.id}`}/>
          </PokemonSpriteWrapper>
          <Title $color="#fff">#{data.id}</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonPreviewCard