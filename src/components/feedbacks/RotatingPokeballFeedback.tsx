import Rotate from "../Rotate"
import PokeballSVG from '../../assets/pokeball.svg'

function RotatingPokeballFeedback({ pokemonId }: { pokemonId: number }) {
  return (
    <Rotate>
      <img src={PokeballSVG} alt={`Loading pokemon ${pokemonId}`} style={{height: '400px', width: '400px'}}/>
    </Rotate>
  )
}

export default RotatingPokeballFeedback