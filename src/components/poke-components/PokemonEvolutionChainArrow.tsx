function PokemonEvolutionChainArrow({ 
  width, 
  height,
  direction
}: { 
  width: number, 
  height: number, 
  direction?: string
}) {
  if (window.innerWidth < 1024) {
    if (direction === 'down') {
      return (
        <img
        src="/really-simple-pokedex-app/upside-arrow.svg" 
        alt="arrow" 
        width={width} 
        height={height} 
        style={{transform: 'rotate(90deg)'}}
        />
      ) 
    }
    if (direction === 'up') {
      return (
        <img
        src="/really-simple-pokedex-app/downside-arrow.svg" 
        alt="arrow" 
        width={width} 
        height={height} 
        style={{transform: 'rotate(90deg)'}}
        />
      )   
    }
    
    return (
      <img
        src="/really-simple-pokedex-app/arrow.svg" 
        alt="arrow" 
        width={width} 
        height={height} 
        style={{transform: 'rotate(90deg)'}}
      />
    )
  }
  
  if (direction === 'up') {
    return (
      <img
      src="/really-simple-pokedex-app/upside-arrow.svg" 
      alt="arrow" 
      width={width} 
      height={height} 
      />
    ) 
  }
  if (direction === 'down') {
    return (
      <img
      src="/really-simple-pokedex-app/downside-arrow.svg" 
      alt="arrow" 
      width={width} 
      height={height} 
      />
    )   
  }
  
  return (
    <img
      src="/really-simple-pokedex-app/arrow.svg" 
      alt="arrow" 
      width={width} 
      height={height} 
    />
  )
  
}

export default PokemonEvolutionChainArrow