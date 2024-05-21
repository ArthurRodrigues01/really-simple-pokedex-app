import Rotate from "../Rotate"

function RotatingPokeballFeedback({ pokemonId, height, width }: { pokemonId: number | string, height?: number, width?: number }) {
  return (
    <Rotate>
      <img src={"/really-simple-pokedex-app/pokeball.svg"} alt={`Loading pokemon ${pokemonId}`} style={{height: height ?? 200, width: width ?? 200}}/>
    </Rotate>
  )
}

export default RotatingPokeballFeedback