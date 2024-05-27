import { getPokemonTypeColor, getPokemonWrapperTypeColor, getVarieties } from "../functions/poke-functions"
import { Variety } from "../types/pokemon-related-types"
import { Title } from "./main-components"
import PokemonVarietyCard from "./PokemonVarietyCard"
import { PokemonVarietiesWrapper, SectionTitleWrapper } from "./styles"

function PokemonVarieties({ type, varieties }: { type: string, varieties: Variety[] }) {
  const result = getVarieties(varieties)

  
  if (result.length === 0) {
    return (
      <div>
        <SectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
          <Title $color="#fff">Other Varieties</Title>
        </SectionTitleWrapper>
        <PokemonVarietiesWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
          <Title $color="#fff">This Pokemon has no additional varieties.</Title>
        </PokemonVarietiesWrapper>
      </div>
    )
  }

  return (
    <div>
      <SectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
        <Title $color="#fff">Other Varieties</Title>
      </SectionTitleWrapper>
      <PokemonVarietiesWrapper $gap={'3rem'} $backgroundColor={getPokemonWrapperTypeColor(type)}>
        {result.map(item => (
          <PokemonVarietyCard
            id={item.id}
            name={item.name}
            key={`pokemon ${item.id}`}
          />
        ))}
      </PokemonVarietiesWrapper>
    </div>
  )
}

export default PokemonVarieties