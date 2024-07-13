import { useEffect, useState } from "react";

import NoPokemonsFoundPageFeedback from "../components/feedbacks/NoPokemonsFoundPageFeedback";
import PokemonPageLoadingFeedback from "../components/feedbacks/PokemonPageLoadingFeedback"
import {
  CenteredFlexRow,
  FlexCol,
  Title
} from "../components/main-components";
import PokemonPreviewCard from "../components/poke-components/PokemonPreviewCard";
import { capitalize } from "../functions/other-functions";
import { getGenIdEtcFromPokeURL } from "../functions/poke-functions";
import useAllSpeciesPreview from "../hooks/useAllSpeciesPreview"
import useURLSearchParams from "../hooks/useURLSearchParams";
import { NamedAPIResource } from "../types/pokemon-related-types";

function SearchResults() {
  const searchParams = useURLSearchParams()
  const [searchResults, setSearchResults] = useState<NamedAPIResource[]>([]);
  const { data, isLoading } = useAllSpeciesPreview()

  useEffect(() => {
    if (data) {
      if (searchParams.query !== '') {
        const filtered = data.filter(
          item => item.name.startsWith(capitalize(searchParams.query))
        )
        
        setSearchResults(filtered)
      }
    }
  }, [searchParams.query]);

  if (data === undefined || isLoading) return <PokemonPageLoadingFeedback/>
  else if (searchResults.length === 0) return <NoPokemonsFoundPageFeedback/>

  return (
    <FlexCol $gap={'1.5rem'}>
      <FlexCol style={{paddingLeft: '1rem'}}>
        <Title>Search: "{searchParams.query}"</Title>
        <Title>Pokemons found: {searchResults.length}</Title>
      </FlexCol>
      <CenteredFlexRow $gap={'1rem'} $wrap>
        { 
          searchResults.map(item => {
            const pokemonId = getGenIdEtcFromPokeURL(item.url)
            
            return (
              <PokemonPreviewCard
                id={pokemonId}
                name={item.name}
                key={`pokemon-${pokemonId}`} 
              />
            )
          })
        }
      </CenteredFlexRow>
    </FlexCol>
  )
}

export default SearchResults