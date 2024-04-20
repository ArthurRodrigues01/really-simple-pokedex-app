import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { getPokemonData } from "../functions/poke-functions";
import { PokemonData } from "../types/pokemon-related-types";
import { Link } from "react-router-dom";
import RotatingPokeballFeedback from "./feedbacks/RotatingPokeballFeedback";

function PokemonPreviewCard({ id, name }: { id: number, name: string }) {
  const ref = useRef(null)
  const { isVisible } = useOnScreen(ref)
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);


  useEffect(() => {
    if (isVisible && pokemonData === null) {
      getPokemonData(id).then(data => setPokemonData(data))
    }
  }, [isVisible]);

  if (pokemonData === null) {
    return (
      <div ref={ref}>
        <h1>{name}</h1>
        <RotatingPokeballFeedback pokemonId={id}/>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Link to={`/pokemon/${pokemonData.id}`}>
      <div ref={ref}>
        <h1>{pokemonData.name}</h1>
        <img src={pokemonData.spriteSrc} alt={`pokemon ${pokemonData.name}`} style={{maxWidth: 350, maxHeight: 350}}/>
        <h1>{pokemonData.id}</h1>
      </div>
    </Link>
  )
}

export default PokemonPreviewCard