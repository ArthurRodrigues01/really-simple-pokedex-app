import { forwardRef } from "react"
import { PokemonImageWrapper, PokemonPreviewCardWrapper } from "../main-poke-components"
import { Title } from "../main-components"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"
import { capitalize } from "../../functions/other-functions"

const PokemonPreviewCardLoadingFeedback = forwardRef<HTMLDivElement, 
{ 
  name: string, 
  id: number 
}>(
  (props, ref) => {
  return (
    <PokemonPreviewCardWrapper ref={ref}>
      <Title color="#fff">{capitalize(props.name)}</Title>
      <PokemonImageWrapper>
        <RotatingPokeballFeedback pokemonId={props.id}/>
      </PokemonImageWrapper>
      <Title color="#fff">Loading...</Title>
    </PokemonPreviewCardWrapper>
  )
})

export default PokemonPreviewCardLoadingFeedback