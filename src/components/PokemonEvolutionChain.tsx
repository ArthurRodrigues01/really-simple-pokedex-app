import { useEffect } from "react";

import { getEvolutionChains, getPokemonTypeColor, getPokemonWrapperTypeColor } from "../functions/poke-functions";
import { ChainLink } from "../types/pokemon-related-types";
import { AlignedFlexRow, FlexCol, Title } from "./main-components";
import PokemonChainLink from "./PokemonChainLink";
import PokemonEvolutionChainArrow from "./PokemonEvolutionChainArrow";
import { PokemonEvolutionChainWrapper, SectionTitleWrapper } from "./styles";

function PokemonEvolutionChain({ chainLink, type }: { chainLink: ChainLink, type: string}) {
  const result = getEvolutionChains(chainLink)
  
  useEffect(() => {
    const divisionArrows = document.querySelectorAll<HTMLImageElement>('.division')
    

    for (let i = 0; i < divisionArrows.length; i++) {
      const half = Math.floor(divisionArrows.length / 2)
      
      if (i === half && divisionArrows.length % 2 !== 0) continue

      if (i < half) {
        divisionArrows[i].src = '/really-simple-pokedex-app/upside-arrow.svg'
      } else {
        divisionArrows[i].src = '/really-simple-pokedex-app/downside-arrow.svg'
      }
    }
  }, [chainLink])

  if (result.branches[0].length === 0) {
    return (
      <div>
        <SectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
          <Title $color="#fff">Evolution Chain</Title>
        </SectionTitleWrapper>
        <PokemonEvolutionChainWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
          <Title $color="#fff">This Pokemon has no evolutions or pre-evolutions</Title>
        </PokemonEvolutionChainWrapper>
      </div>
    )
  }

  return (
    <div>
      <SectionTitleWrapper $backgroundColor={getPokemonTypeColor(type)}>
        <Title $color="#fff">Evolution Chain</Title>
      </SectionTitleWrapper>
      <PokemonEvolutionChainWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
        {result.base.map((item, index) => (
          <AlignedFlexRow $gap={'2rem'} key={`pokemon-${item.id}`}>
            {
              index > 0 &&
              <PokemonEvolutionChainArrow width={125} height={125}/>
            }
            <PokemonChainLink
              id={item.id}
            />
          </AlignedFlexRow>
        ))}
        <FlexCol $gap={'2rem'}>
          {result.branches.map((item, index) => (
            <AlignedFlexRow $gap={'2rem'} key={`branch-wrapper-${index}`}>
              {item.map((item2, index2) => (
                <AlignedFlexRow $gap={'2rem'} key={`pokemon-${item2.id}`}>
                    <PokemonEvolutionChainArrow width={125} height={125} className={index2 === 0 ? 'division' : 'arrow'}/>
                    <PokemonChainLink
                      id={item2.id}
                    />
                </AlignedFlexRow>
              ))}
            </AlignedFlexRow>
          ))}
        </FlexCol>
      </PokemonEvolutionChainWrapper>
    </div>
  )
}

export default PokemonEvolutionChain