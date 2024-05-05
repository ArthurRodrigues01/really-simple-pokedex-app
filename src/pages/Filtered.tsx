import { useNavigate } from "react-router-dom"

import PokemonPreviewCard from "../components/PokemonPreviewCard"
import useFilteredPokemonsPreviewData from "../hooks/useFilteredPokemonsPreviewData"
import useURLSearchParams from "../hooks/useURLSearchParams"

function Filtered() {
  const validTypes = [
    'normal', 'fighting', 
    'flying', 'poison', 
    'ground', 'rock', 
    'bug', 'ghost',
    'steel', 'fire',
    'water', 'grass',
    'electric', 'psychic',
    'ice', 'dragon',
    'dark', 'fairy'
  ]
  const validGens = [1,2,3,4,5,6,7,8,9]
  const navigate = useNavigate()
  const searchParams = useURLSearchParams()
  const { previewData, isLoading } = useFilteredPokemonsPreviewData({
    gen: Number(searchParams.gen),
    types: [searchParams.type1, searchParams.type2]
  }) 

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (previewData === null) {
    return <h1>Sorry, no pokemons found, try less options or check if the current ones are typed correctly.</h1>
  }

  return (
    <>
      <div>
        <label htmlFor="type1">Type 1:</label>
        <select id="type1">
          <option value="none">---</option>
          {validTypes.map(type => (
            <option key={`type1-option-${type}`} value={type}>{type}</option>)
          )}
        </select>
        <label htmlFor="type2">Type 2:</label>
        <select id="type2">
          <option value="none">---</option>
          {validTypes.map(type => (
            <option key={`type2-option-${type}`} value={type}>{type}</option>)
          )}
        </select>
        <label htmlFor="gen">Gen:</label>
        <select id="gen">
          <option value="none">---</option>
          {validGens.map(gen => (
            <option key={`gen-option-${gen}`} value={gen}>{gen}</option>)
          )}
        </select>
        <button onClick={() => {
          const type1Select: HTMLSelectElement | null = document.querySelector('#type1')
          const type2Select: HTMLSelectElement | null = document.querySelector('#type2')
          const genSelect: HTMLSelectElement | null = document.querySelector('#gen')

          const type1Value = type1Select!.value
          const type2Value = type2Select!.value
          const genValue = genSelect!.value
          let navlink = ['/filtered?']

          if (genValue !== 'none') {
            navlink.push(`gen=${genValue}`)
          } 
          if (type1Value !== 'none') {
            navlink.push(`type1=${type1Value}`)
          }
          if (type2Value !== 'none') {
            navlink.push(`type2=${type2Value}`)
          }

          if (navlink.length !== 1) navigate(navlink.join('&'))

        }}>search</button>
      </div>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 16}}>
        {previewData.map(fetchedPokemon => (
          <PokemonPreviewCard 
            id={fetchedPokemon.id}
            name={fetchedPokemon.name}
            key={`pokemon-${fetchedPokemon.id}`}
          />
        ))}
      </div>
    </>
  )
}

export default Filtered