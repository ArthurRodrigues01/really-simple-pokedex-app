import { useEffect, useState } from "react";

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
      $borderBottomRightRadius={'4rem'} 
      $borderTopLeftRadius={'4rem'}
      $outline
    >
      <NoDecorationLink to={`/pokemon/${data.id}`} style={{borderBottomRightRadius: '4rem', borderTopLeftRadius: '4rem'}}>
        <PokemonPreviewCardWrapper ref={ref} $backgroundColor={getPokemonTypeColor(data.types[0])}>
          <Title $color="#fff">{data.name}</Title>
          <PokemonSpriteWrapper>
            <PokemonSprite src={data.spriteSrc} alt={`pokemon ${data.id}`}/>
          </PokemonSpriteWrapper>
          <Title $color="#fff">#{data.id}</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
}

export default PokemonPreviewCard