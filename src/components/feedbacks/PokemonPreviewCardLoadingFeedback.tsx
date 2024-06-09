import { forwardRef } from "react"

import { NoDecorationLink, Title } from "../main-components"
import { PokemonPreviewCardWrapper } from "../poke-components/main-poke-components"
import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

const PokemonPreviewCardLoadingFeedback = forwardRef<HTMLDivElement, 
{ 
  name: string, 
  id: number 
}>(
  (props, ref) => {
  return (
    <HoverableGrowthFeedback
      $borderBottomRightRadius={16} 
      $borderTopLeftRadius={16}
    >
      <NoDecorationLink to={`/pokemon/${props.id}`}>
        <PokemonPreviewCardWrapper ref={ref}>
          <Title $color="#fff">{props.name}</Title>
          <RotatingPokeballFeedback pokemonId={props.id}/>
          <Title $color="#fff">Loading...</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
})

export default PokemonPreviewCardLoadingFeedback