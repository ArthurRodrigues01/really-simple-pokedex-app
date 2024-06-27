import { forwardRef } from "react"

import { EllipsedText, NoDecorationLink } from "../main-components"
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
          <EllipsedText $centeredText>{props.name}</EllipsedText>
          <RotatingPokeballFeedbackPreviewCard pokemonId={props.id}/>
          <EllipsedText $centeredText>Loading...</EllipsedText>
        </PokemonPreviewCardWrapper>
      </NoDecorationLink>
    </HoverableGrowthFeedback>
  )
})

export default PokemonPreviewCardLoadingFeedback