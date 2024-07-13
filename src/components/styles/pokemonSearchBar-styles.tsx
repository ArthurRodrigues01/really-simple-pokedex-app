import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import { getGenIdEtcFromPokeURL } from "../../functions/poke-functions"
import useImagePreloader from "../../hooks/useImagePreloader"
import useSinglePokemonData from "../../hooks/useSinglePokemonData"
import { NamedAPIResource } from "../../types/pokemon-related-types"
import NoPokemonsFoundSearchBarFeedback from "../feedbacks/NoPokemonsFoundSearchBarFeedback"
import RotatingPokeballFeedbackSearchBar from "../feedbacks/RotatingPokeballFeedbackSearchBar"
import SuggestionBoxLoadingFeedback from "../feedbacks/SuggestionBoxLoadingFeedback"
import {
  Bold,
  EllipsedSubTitle,
  FlexCol,
  FlexRow,
  NoDecorationLink
} from "../main-components"

export const PokemonSearchBarWrapper = styled(FlexRow)`
  position: absolute;
  right: 2rem;
  align-items: center;
  width: 300px;

  @media ${DEVICE_QUERIES.tablet} {
    position: relative;
    right: 0;
    width: 100%;
  }
`

export const SearchBar = styled.input`
  border: 0;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0.5rem 1rem 0.5rem 3rem;
  width: calc(100% - 2rem);
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;

  @media ${DEVICE_QUERIES.tablet} {
    border-radius: 0;
  }
`
export const Box = styled(FlexCol)`
  position: absolute;
  top: 48px;
  border: 3px solid #000;
  background-color: #fff;
  width: 100%;
  z-index: 1001;
`

const SuggestionItem = styled(NoDecorationLink)`
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  padding: 0.5rem 1rem;
  overflow: hidden;
  gap: 2rem;

  &: hover, &: focus {
    background-color: lightgray;
  }
`
const SuggestionBoxFooter = styled(SuggestionItem)`
  padding: 0.2rem 2rem;
  color: gray;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem
`

const MinimizedPokemonImg = styled.img`
  max-width: 50px;
  max-height: 50px;
`
export const MagnifyingGlassIcon = styled.img`
  position: absolute;
  left: 0.5rem;
  width: 2rem;
  height: 2rem;
`

const SuggestionPokemon = (
  { 
    searchString,
    pokemonId, 
    pokemonName, 
    resetSearchBarHandler 
  }: { 
    searchString: string,
    pokemonId: number, 
    pokemonName: string,
    resetSearchBarHandler: (e: React.FocusEvent) => void
  }
) => {
  const { data, isLoading } = useSinglePokemonData(pokemonId)
  const { hasLoaded } = useImagePreloader(data ? data.spriteSrc : '')
  const Highlighted = pokemonName.slice(0, searchString.length)
  const NonHighlighted = pokemonName.slice(searchString.length)

  if ( data === null || isLoading || hasLoaded === false) {
    return (
      <SuggestionItem 
        to={`/pokemon/${pokemonId}`}
        onBlur={resetSearchBarHandler}  
      >
        <RotatingPokeballFeedbackSearchBar pokemonId={pokemonId}/>
        <EllipsedSubTitle $color="#000" $highlighted={false}>
          <Bold $color="#000">{Highlighted}</Bold>
          {NonHighlighted}  
        </EllipsedSubTitle>
      </SuggestionItem>
    )
  }

  return (
    <SuggestionItem 
      to={`/pokemon/${pokemonId}`}
      onBlur={resetSearchBarHandler}  
    >
      <MinimizedPokemonImg
        src={data.spriteSrc}
        alt="Minimized pokemon image"
      />
      <EllipsedSubTitle $color="#000" $highlighted={false}>
        <Bold $color="#000">{Highlighted}</Bold>
        {NonHighlighted}  
      </EllipsedSubTitle>
    </SuggestionItem>
  )
}

export const SuggestionBox = (
  { 
    searchString, 
    searchResults, 
    arePokemonsLoading,
    resetSearchBarHandler 
  }: { 
    searchString: string, 
    searchResults: NamedAPIResource[],
    arePokemonsLoading: boolean, 
    resetSearchBarHandler: (e: React.FocusEvent) => void 
  }
) => {
  const searchBarPreview = (
    searchResults.length > 6  ? searchResults.slice(0, 6) : searchResults
  )

  if (searchString === '') return <></>
  else if (arePokemonsLoading) return (
    <Box>
      <SuggestionBoxLoadingFeedback/>
    </Box>
  ) 
  else if (searchBarPreview.length === 0) return (
    <Box>
      <NoPokemonsFoundSearchBarFeedback/>
    </Box>
  )

  return ( 
    <Box>
      {
        searchBarPreview.map(pokemon => (
          <SuggestionPokemon 
            key={pokemon.name}
            searchString={searchString}
            pokemonId={getGenIdEtcFromPokeURL(pokemon.url)} 
            pokemonName={pokemon.name}
            resetSearchBarHandler={resetSearchBarHandler}
          />
        ))
      }
      {
        searchResults.length > 6 && 
        <SuggestionBoxFooter to={`/search?query=${searchString}`}>...and {searchResults.length - 6} more.</SuggestionBoxFooter>
      }
    </Box>
  )
}