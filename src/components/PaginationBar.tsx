import { useQueryClient } from "@tanstack/react-query"

import { getPokemonData } from "../functions/poke-functions"
import { preloadImage } from "../hooks/useImagePreloader"
import { CenteredFlexRow } from "./main-components"
import { PaginationCell, PaginationCellCurrent } from "./styles/paginationBar-styles"

function PaginationBar ({ 
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
  const previousPageId = current - 1
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
    Prefetch up to {growth * 2} of next pages, or nothing
    if there is no next page.
  */
  for (let i = nextPageId; i <= cells[cells.length - 1] + growth; i++) {
    if (current !== cells[cells.length - 1]){   
      if (i > max) continue

      queryClient.fetchQuery({
        queryKey: ['pokemonId', i],
        queryFn: async () => await getPokemonData(i)
      }).then(data => {
        if (data !== null) preloadImage(data.spriteSrc)
      })
    } 
  }
  /*
    Prefetch up to {growth * 2} of previous pages, or nothing
    if theere is no previous page.
   */
  for (let i = previousPageId; i >= cells[0] - growth; i--) {
    if (current !== cells[0]){   
      if (i < min) continue

      queryClient.fetchQuery({
        queryKey: ['pokemonId', i],
        queryFn: async () => await getPokemonData(i)
      }).then(data => {
        if (data !== null) preloadImage(data.spriteSrc)
      })
    } 
  }

  return (
    <CenteredFlexRow>
      {
        cells.map((item, index) => {
          if (item === current) {
            return <PaginationCellCurrent key={`pagination-button-${index}-deactivated`}>{item}</PaginationCellCurrent>
          }
          return <PaginationCell key={`pagination-button-${index}`} to={`/pokemon/${item}`}>{item}</PaginationCell>
        })
      }
    </CenteredFlexRow>
  )
}

export default PaginationBar 