import { ArrowImage } from "../styles/pokemonEvolutionChainArrow-styles"

function PokemonEvolutionChainArrow({ 
  width, 
  height,
  direction
}: { 
  width: number, 
  height: number, 
  direction?: string
}) {

  const imageSrc = (
    direction === 'up' ? 
    "/really-simple-pokedex-app/upside-arrow.svg" : 
    (
      direction === 'down' ? 
      "/really-simple-pokedex-app/downside-arrow.svg" : 
      "/really-simple-pokedex-app/arrow.svg"
    )
  )

  return (
    <ArrowImage
      src={imageSrc} 
      alt="arrow" 
      width={width} 
      height={height} 
    />
  )
}

export default PokemonEvolutionChainArrow