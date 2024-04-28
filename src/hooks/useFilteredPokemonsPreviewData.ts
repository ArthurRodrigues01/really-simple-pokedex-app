import { PokemonFilteringOptions, PokemonsPreviewDataStatus } from "../types/pokemon-related-types";
import usePokemonsPreviewDataGen from "./usePokemonsPreviewDataGen";
import usePokemonsPreviewDataTypes from "./usePokemonsPreviewDataTypes";
import { getCommonItemsFromObjectArrays, isObjectEmpty } from "../functions/other-functions";

function useFilteredPokemonsPreviewData(options: PokemonFilteringOptions): PokemonsPreviewDataStatus {
  if (isObjectEmpty(options)) {
    return {
      previewData: null,
      isLoading: false
    }
  }

  const { isLoading: isLoadingGen, previewData: previewDataGen } = usePokemonsPreviewDataGen(Number(options.gen))
  const { isLoading: isLoadingTypes, previewData: previewDataTypes } = usePokemonsPreviewDataTypes(options.types ?? [])

  const sanitized = [previewDataGen, previewDataTypes].filter(item => item !== null)

  const res = sanitized.reduce((prev, curr, index) => {
    if (index === 0) return curr

    return getCommonItemsFromObjectArrays(prev!, curr!, 'name')
  }, [])

  return { 
    previewData: res!.length !== 0 ? res! : null, 
    isLoading: isLoadingTypes || isLoadingGen
  }
}

export default useFilteredPokemonsPreviewData