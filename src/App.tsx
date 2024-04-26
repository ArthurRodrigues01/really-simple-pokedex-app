import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SinglePokemon from "./pages/SinglePokemon"
import Redirect from "./pages/Redirect"
import NavigationHeader from "./components/NavigationHeader"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Filtered from "./pages/Filtered"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/really-simple-pokedex-app/">
        <NavigationHeader/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/pokemon/:id"} element={<SinglePokemon/>}/>
          <Route path={"/filtered"} element={<Filtered/>}/>
          <Route path="*" element={<Redirect destination="/"/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
