import { useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getPokemonData } from "../functions/poke-functions"

function PokePaginationBar ({ 
  growth,
  current, 
  max
}: { 
  growth: number,
  current: number,
  max: number,
}) {
  const queryClient = useQueryClient()
  const nextPageId = current + 1
  const maxCell = current + growth
  const minCell = current - growth
  const min = 1
  let cells: number[] = []


  if (minCell < min) {
    for (let i = min; i <= min + (growth * 2); i++) {
      cells.push(i)
    }
  } else if (maxCell > max) {
    for (let i = max - (growth * 2); i <= max; i++) {
      cells.push(i)
    }
  } else {
    for (let i = minCell; i <= maxCell; i++) {
      cells.push(i)
    }
  }

  /*
    Prefetch up to {growth} of next pages, or nothing
    if there is no next page.
  */
  for (let i = nextPageId; i <= cells[cells.length - 1]; i++) {
    if (current !== cells[cells.length - 1]){   
      queryClient.prefetchQuery({
        queryKey: ['pokemonId', i],
        queryFn: async () => await getPokemonData(i)
      })
    } 
  }

  return (
    <div>
      {
        cells.map(item => {
          if (item === current) return <h1>{item}</h1>
          return <Link to={`/pokemon/${item}`}><h1>{item}</h1></Link>
        })
      }
    </div>
  )
}

export default PokePaginationBar 