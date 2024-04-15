import { PokemonFilteringOptions, PokemonPreviewData, PokemonsPreviewDataStatus } from "../types/pokemon-related-types";
import usePokemonsPreviewDataGen from "./usePokemonsPreviewDataGen";
import usePokemonsPreviewDataTypes from "./usePokemonsPreviewDataTypes";
import { getCommonItemsFromObjectArrays, isObjectEmpty } from "../functions/other-functions";
import { useRef } from "react";

function useFilteredPokemonsPreviewData(options: PokemonFilteringOptions): PokemonsPreviewDataStatus {
  if (isObjectEmpty(options)) {
    return {
      previewData: null,
      isLoading: false
    }
  }

  const { isLoading: isLoadingGen, previewData: previewDataGen } = usePokemonsPreviewDataGen(Number(options.gen))
  const { isLoading: isLoadingTypes, previewData: previewDataTypes } = usePokemonsPreviewDataTypes(options.types ?? [])
  
  const filteredPreviewData = useRef<PokemonPreviewData[] | null>(null)

  const some = [previewDataGen, previewDataTypes]
  if (isLoadingGen === false && isLoadingTypes === false) {
    for (const result of some) {
      if (result === null) continue
      
      if (filteredPreviewData.current === null) {
        filteredPreviewData.current = result
      } else {
        filteredPreviewData.current = getCommonItemsFromObjectArrays(filteredPreviewData.current, result, 'name')
      }

      filteredPreviewData.current.sort((a,b) => a.id - b.id)
    }
  }

  return { 
    previewData: filteredPreviewData.current, 
    isLoading: isLoadingTypes || isLoadingGen
  }
}

export default useFilteredPokemonsPreviewData