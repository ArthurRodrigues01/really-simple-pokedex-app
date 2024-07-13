import PokemonSearchBar from "./poke-components/PokemonSearchBar"
import { NavHeaderItem, NavHeaderWrapper, NavLinksWrapper } from "./styles/navigationHeader-styles"

function NavigationHeader() {

  return (
    <NavHeaderWrapper>
      <NavLinksWrapper>
        <NavHeaderItem to={'/'}>Home</NavHeaderItem>
        <NavHeaderItem to={'/filtered?gen=1'}>Filtered</NavHeaderItem>
      </NavLinksWrapper>
      <PokemonSearchBar/>
    </NavHeaderWrapper>
  )
}

export default NavigationHeader