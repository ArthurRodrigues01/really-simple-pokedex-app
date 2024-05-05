import {
  getCommonItemsFromObjectArrays,
  isObjectEmpty
} from "../functions/other-functions";
import {
  PokemonFilteringOptions,
  PokemonsPreviewDataStatus
} from "../types/pokemon-related-types";
import usePokemonsPreviewDataGen from "./usePokemonsPreviewDataGen";
import usePokemonsPreviewDataTypes from "./usePokemonsPreviewDataTypes";

function useFilteredPokemonsPreviewData(options: PokemonFilteringOptions): PokemonsPreviewDataStatus {
  const { 
    isLoading: isLoadingGen, 
    previewData: previewDataGen 
  } = usePokemonsPreviewDataGen(Number(options.gen))
  const { 
    isLoading: isLoadingTypes, 
    previewData: previewDataTypes 
  } = usePokemonsPreviewDataTypes(options.types ?? [])

  if (isObjectEmpty(options)) {
    return {
      previewData: null,
      isLoading: false
    }
  }

  const sanitized = [previewDataGen, previewDataTypes].filter(item => item !== null)

  const reducedData = sanitized.reduce((prev, curr, index) => {
    if (index === 0) return curr

    return getCommonItemsFromObjectArrays(prev!, curr!, 'name')
  }, [])

  return { 
    previewData: reducedData!.length !== 0 ? reducedData!.sort((a, b) => a.id - b.id) : null, 
    isLoading: isLoadingTypes || isLoadingGen
  }
}

export default useFilteredPokemonsPreviewData