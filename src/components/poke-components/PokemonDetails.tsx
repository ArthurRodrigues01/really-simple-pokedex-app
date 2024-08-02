import { getPokemonTypeColor, getPokemonWrapperTypeColor } from "../../functions/poke-functions"
import { AlignedFlexRow, SubTitle, Text, Title } from "../main-components"
import {
  PokemonSectionTitleWrapper,
  PokemonType,
  PokemonTypesWrapper,
  SectionWrapper
} from "../styles"
import {
  PokemonDetailsGridArea,
  PokemonDetailsWrapper
} from "../styles/pokemonDetails-styles"

function PokemonDetails({
  id,
  height,
  weight,
  gen,
  types,
  weaknesses,
} : {
  id: number,
  height: number,
  weight: number,
  gen: number,
  types: string[],
  weaknesses: string[]
}) {
  return ( 
    <SectionWrapper>
      <PokemonSectionTitleWrapper $backgroundColor={getPokemonTypeColor(types[0])}>
        <Title>Pokemon Details</Title>
      </PokemonSectionTitleWrapper>
      <PokemonDetailsWrapper $backgroundColor={getPokemonWrapperTypeColor(types[0])}>
        <PokemonDetailsGridArea $gap={'1.5rem'}>
          <SubTitle>ID: <Text>{id}</Text></SubTitle>
          <SubTitle>Gen: <Text>{gen}</Text></SubTitle>
          <SubTitle>Height: <Text>{height}m</Text></SubTitle>
          <SubTitle>Weight: <Text>{weight}kg</Text></SubTitle>
          <AlignedFlexRow $gap={'1rem'} $wrap>
            <SubTitle>Weaknesses: </SubTitle> 
            <PokemonTypesWrapper $wrap>
              {
                weaknesses.length !== 0 ?
                
                weaknesses.map(weakness => (
                  <PokemonType
                    key={`pokemon-weakness-${weakness}`} 
                    type={weakness}
                  />
                )) :

                <SubTitle $color="#000">None</SubTitle>
              }
            </PokemonTypesWrapper>
          </AlignedFlexRow>
        </PokemonDetailsGridArea>
      </PokemonDetailsWrapper>
    </SectionWrapper>
  )
}

export default PokemonDetails