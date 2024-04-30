import { Link } from "react-router-dom"

import { CenteredFlexRowGap } from "./styles"

function NavigationHeader() {

  return (
    <CenteredFlexRowGap>
      <Link to={'/'}><h1>Home</h1></Link>
      <Link to={'/filtered?gen=1'}><h1>Filtered</h1></Link>
    </CenteredFlexRowGap>
  )
}

export default NavigationHeader