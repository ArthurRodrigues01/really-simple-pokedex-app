import { forwardRef } from "react"

import { EllipsedTitle, NoDecorationLink } from "../main-components"
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
          <EllipsedTitle $centeredText>{props.name}</EllipsedTitle>
          <RotatingPokeballFeedbackPreviewCard pokemonId={props.id}/>
          <EllipsedTitle $centeredText>Loading...</EllipsedTitle>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
})

export default PokemonPreviewCardLoadingFeedback