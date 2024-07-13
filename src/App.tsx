import { Route, Routes } from "react-router-dom"

import NavigationHeader from "./components/NavigationHeader"
import Filtered from "./pages/Filtered"
import Home from "./pages/Home"
import Redirect from "./pages/Redirect"
import SearchResults from "./pages/SearchResults"
import SinglePokemon from "./pages/SinglePokemon"

function App() {
  return (
    <>
      <NavigationHeader/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/pokemon/:id"} element={<SinglePokemon/>}/>
        <Route path={"/filtered"} element={<Filtered/>}/>
        <Route path={"/search"} element={<SearchResults/>}/>
        <Route path="*" element={<Redirect destination="/"/>}/>
      </Routes>
    </>
  )
}

export default App
