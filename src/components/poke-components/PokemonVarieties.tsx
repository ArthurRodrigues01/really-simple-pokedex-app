import { getPokemonTypeColor, getPokemonWrapperTypeColor, getVarieties } from "../../functions/poke-functions"
import { Variety } from "../../types/pokemon-related-types"
import { Title } from "../main-components"
import { PokemonSectionTitleWrapper, SectionWrapper } from "../styles"
import { PokemonVarietiesWrapper } from "../styles/pokemonVarieties-styles"
import PokemonVarietyCard from "./PokemonVarietyCard"

function PokemonVarieties({ type, varieties }: { type: string, varieties: Variety[] }) {
  const result = getVarieties(varieties)

  
  if (result.length === 0) {
    return (
      <SectionWrapper>
        <PokemonSectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
          <Title $color="#fff">Other Varieties</Title>
        </PokemonSectionTitleWrapper>
        <PokemonVarietiesWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
          <Title $color="#fff">This Pokemon has no additional varieties.</Title>
        </PokemonVarietiesWrapper>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper >
      <PokemonSectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
        <Title $color="#fff">Other Varieties</Title>
      </PokemonSectionTitleWrapper>
      <PokemonVarietiesWrapper $gap={'1rem'} $backgroundColor={getPokemonWrapperTypeColor(type)}>
        {result.map(item => (
          <PokemonVarietyCard
            id={item.id}
            name={item.name}
            key={`pokemon ${item.id}`}
          />
        ))}
      </PokemonVarietiesWrapper>
    </SectionWrapper>
  )
}

export default PokemonVarieties