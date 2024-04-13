import { Link } from "react-router-dom"

function NavigationHeader() {

  return (
    <div>
      <Link to={'/'}><h1>Home</h1></Link>
      <Link to={'/pokemon/1'}><h1>Pokemons</h1></Link>
    </div>
  )
}

export default NavigationHeader