import { useQuery } from "@tanstack/react-query"

import { getAllSpeciesPreview } from "../functions/poke-functions"

function useAllSpeciesPreview() {
  const { data, isLoading } = useQuery({
    queryKey: ['allSpeciesPreview'],
    queryFn: getAllSpeciesPreview
  })

  return {
    data,
    isLoading
  }
}

export default useAllSpeciesPreview