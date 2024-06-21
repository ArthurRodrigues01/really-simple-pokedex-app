import { forwardRef } from "react"

import { NoDecorationLink, Title } from "../main-components"
import { PokemonPreviewCardWrapper } from "../styles/pokemonPreviewCard-styles"
import HoverableGrowthFeedback from "./HoverableGrowthFeedback"
import RotatingPokeballFeedbackPreviewCard from "./RotatingPokeballFeedbackPreviewCard"

const PokemonPreviewCardLoadingFeedback = forwardRef<HTMLDivElement, 
{ 
  name: string, 
  id: number 
}>(
  (props, ref) => {
  return (
    <HoverableGrowthFeedback
      $borderBottomRightRadius={'3rem'} 
      $borderTopLeftRadius={'3rem'}
    >
      <NoDecorationLink to={`/pokemon/${props.id}`}>
        <PokemonPreviewCardWrapper ref={ref}>
          <Title $color="#fff">{props.name}</Title>
          <RotatingPokeballFeedbackPreviewCard pokemonId={props.id}/>
          <Title $color="#fff">Loading...</Title>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
})

export default PokemonPreviewCardLoadingFeedback