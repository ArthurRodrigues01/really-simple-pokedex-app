import { RotateImage } from "./styles"

function PokemonEvolutionChainArrow(
  { 
    width, 
    height, 
    angle,
    className
  }: { 
    width: number, 
    height: number, 
    angle?: number,
    className?: string
  }) {
  return (
    <RotateImage 
      src="/really-simple-pokedex-app/arrow.svg" 
      alt="arrow" 
      className={className ?? 'arrow'}
      width={width} 
      height={height} 
      $angle={angle ?? 0}
    />
  )
}

export default PokemonEvolutionChainArrow