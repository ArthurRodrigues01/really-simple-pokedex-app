import Rotate from "../Rotate"

function RotatingPokeballFeedback({ pokemonId }: { pokemonId: number }) {
  return (
    <Rotate>
      <img src={"/really-simple-pokedex-app/pokeball.svg"} alt={`Loading pokemon ${pokemonId}`} style={{height: '200px', width: '200px'}}/>
    </Rotate>
  )
}

export default RotatingPokeballFeedback