import { forwardRef } from "react"

import { capitalize } from "../../functions/other-functions"
import { NoDecorationLink, Title } from "../main-components"
import { PokemonPreviewCardWrapper, PokemonSpriteWrapper } from "../main-poke-components"
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
      borderBottomRightRadius={16} 
      borderTopLeftRadius={16}
    >
      <NoDecorationLink to={`/pokemon/${props.id}`}>
        <PokemonPreviewCardWrapper ref={ref}>
          <Title $color="#fff">{capitalize(props.name)}</Title>
          <PokemonSpriteWrapper>
            <RotatingPokeballFeedback pokemonId={props.id}/>
          </PokemonSpriteWrapper>
          <Title $color="#fff">Loading...</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
})

export default PokemonPreviewCardLoadingFeedback