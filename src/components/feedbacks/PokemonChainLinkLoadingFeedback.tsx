import { forwardRef } from "react"

import { capitalize } from "../../functions/other-functions"
import { NoDecorationLink, Title } from "../main-components"
import RotatingPokeballFeedback from "./RotatingPokeballFeedback"

const PokemonChainLinkLoadingFeedback = forwardRef<HTMLDivElement, 
{ 
  name: string, 
  id: number 
}>(
  (props, ref) => {
  return (
      <NoDecorationLink to={`/pokemon/${props.id}`}>
        <div ref={ref}> 
          <RotatingPokeballFeedback pokemonId={props.id} width={150} height={150}/>
        </div>
          <Title color="#fff">{capitalize(props.name)}</Title>
      </NoDecorationLink>
  )
})

export default PokemonChainLinkLoadingFeedback