import Rotate from "../Rotate"
import PokeballSVG from '../assets/pokeball.svg'

function RotatingPokeballFeedback({ pokemonId }: { pokemonId: number }) {
  return (
    <Rotate>
      <img src={PokeballSVG} alt={`Loading pokemon ${pokemonId}`} style={{maxWidth: 500, maxHeight: 500}}/>
    </Rotate>
  )
}

export default RotatingPokeballFeedback