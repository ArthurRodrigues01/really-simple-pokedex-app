import { PokemonFilteringOptions, PokemonPreviewData, PokemonsPreviewDataStatus } from "../types/pokemon-related-types";
import usePokemonsPreviewDataGen from "./usePokemonsPreviewDataGen";
import usePokemonsPreviewDataTypes from "./usePokemonsPreviewDataTypes";
import { getCommonItemsFromObjectArrays } from "../functions/other-functions";

function useFilteredPokemonsPreviewData(options: PokemonFilteringOptions): PokemonsPreviewDataStatus {
  if (!Object.getOwnPropertyNames(options)[0]) {
    return {
      previewData: null,
      isLoading: false
    }
  }

  const pokemonsPreviewDataGen = usePokemonsPreviewDataGen(Number(options.gen))
  const pokemonsPreviewDataTypes = usePokemonsPreviewDataTypes(options.types ? options.types : [])

  let filteredPreviewData: PokemonPreviewData[] | null = null

  if (!pokemonsPreviewDataGen.isLoading && !pokemonsPreviewDataTypes.isLoading) {
    let previewDataGen
    let previewDataTypes

    if (options.gen) {
      previewDataGen = pokemonsPreviewDataGen.previewData  
    }
    if (options.types) {
      previewDataTypes = pokemonsPreviewDataTypes.previewData
    }

    if (previewDataGen && previewDataTypes) {
      filteredPreviewData = getCommonItemsFromObjectArrays(previewDataGen, previewDataTypes, 'name')
    } else if (previewDataGen) {
      filteredPreviewData = previewDataGen
    } else if (previewDataTypes) {
      filteredPreviewData = previewDataTypes
    }

    filteredPreviewData?.sort((a,b) => a.id - b.id)
  }

  return { 
    previewData: filteredPreviewData, 
    isLoading: pokemonsPreviewDataGen.isLoading || pokemonsPreviewDataTypes.isLoading
  }
}

export default useFilteredPokemonsPreviewData