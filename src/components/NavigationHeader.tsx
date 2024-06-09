import { NavHeaderItem, NavHeaderWrapper } from "./styles/navigationHeader-styles"

function NavigationHeader() {

  return (
    <NavHeaderWrapper>
      <NavHeaderItem to={'/'}>Home</NavHeaderItem>
      <NavHeaderItem to={'/filtered?gen=1'}>Filtered</NavHeaderItem>
    </NavHeaderWrapper>
  )
}

export default NavigationHeader