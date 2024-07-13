import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { capitalize } from "../../functions/other-functions";
import useAllSpeciesPreview from "../../hooks/useAllSpeciesPreview";
import { NamedAPIResource } from "../../types/pokemon-related-types";
import {
  MagnifyingGlassIcon,
  PokemonSearchBarWrapper,
  SearchBar,
  SuggestionBox
} from "../styles/pokemonSearchBar-styles";

function PokemonSearchBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchString, setSearchString] = useState('')
  const [searchResults, setSearchResults] = useState<NamedAPIResource[]>([])
  const { data, isLoading } = useAllSpeciesPreview()
  
  useEffect(() => {
    if (data) {
      const filtered = data.filter(item => item.name.startsWith(capitalize(searchString)))

      setSearchResults(filtered)
    }
  }, [searchString]);

  useEffect(() => {
    setSearchString('')
  }, [location])

  return (
    <PokemonSearchBarWrapper id="search-bar-wrapper">
      <MagnifyingGlassIcon
        src="/really-simple-pokedex-app/magnifying-glass.svg"
        alt="Magnifying glass icon"
      />
      <SearchBar 
        placeholder="Search pokemon..." 
        type="text" 
        value={searchString}
        onBlur={resetSearchBarHandler}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={goToSearchResultsPageHandler}
      />
      <SuggestionBox 
        searchString={searchString} 
        searchResults={searchResults}
        arePokemonsLoading={isLoading}
        resetSearchBarHandler={resetSearchBarHandler}
      />
    </PokemonSearchBarWrapper>
  )

  function resetSearchBarHandler(e: React.FocusEvent) {
    const currentFocusedElement = e.relatedTarget
    const isOutsideSearchBarWrapper = (
      currentFocusedElement === null || 
      currentFocusedElement.closest('#search-bar-wrapper') === null
    )
  
    if (isOutsideSearchBarWrapper) {
      setSearchString('')
    }
  }
  function goToSearchResultsPageHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      navigate(`/search?query=${searchString}`)
    }
  }
}

export default PokemonSearchBar