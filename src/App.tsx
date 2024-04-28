import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SinglePokemon from "./pages/SinglePokemon"
import Redirect from "./pages/Redirect"
import NavigationHeader from "./components/NavigationHeader"
import Filtered from "./pages/Filtered"


function App() {
  return (
    <>
      <NavigationHeader/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/pokemon/:id"} element={<SinglePokemon/>}/>
        <Route path={"/filtered"} element={<Filtered/>}/>
        <Route path="*" element={<Redirect destination="/"/>}/>
      </Routes>
    </>
  )
}

export default App
