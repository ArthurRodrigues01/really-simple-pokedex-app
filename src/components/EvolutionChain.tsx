import { useEffect } from "react";

import { getEvolutionChains, getPokemonTypeColor, getPokemonWrapperTypeColor } from "../functions/poke-functions";
import { ChainLink } from "../types/pokemon-related-types";
import EvolutionChainArrow from "./EvolutionChainArrow";
import { AlignedFlexRow, FlexCol, Title } from "./main-components";
import PokemonChainLink from "./PokemonChainLink";
import { EvolutionChainWrapper, SectionTitleWrapper } from "./styles";

function EvolutionChain({ chainLink, type }: { chainLink: ChainLink, type: string}) {
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
        <SectionTitleWrapper $color={getPokemonTypeColor(type)}>
          <Title $color="#fff">Evolution Chain</Title>
        </SectionTitleWrapper>
        <EvolutionChainWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
          <Title $color="#fff">This Pokemon has no evolutions or pre-evolutions</Title>
        </EvolutionChainWrapper>
      </div>
    )
  }

  return (
    <div>
      <SectionTitleWrapper $color={getPokemonTypeColor(type)}>
        <Title $color="#fff">Evolution Chain</Title>
      </SectionTitleWrapper>
      <EvolutionChainWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
        {result.base.map((item, index) => (
          <AlignedFlexRow $gap={'2rem'} key={`pokemon-${item.id}`}>
            {
              index > 0 &&
              <EvolutionChainArrow width={125} height={125}/>
            }
            <PokemonChainLink
              id={item.id}
              name={item.name}
            />
          </AlignedFlexRow>
        ))}
        <FlexCol $gap={'2rem'}>
          {result.branches.map((item, index) => (
            <AlignedFlexRow $gap={'2rem'} key={`branch-wrapper-${index}`}>
              {item.map((item2, index2) => (
                <AlignedFlexRow $gap={'2rem'} key={`pokemon-${item2.id}`}>
                    <EvolutionChainArrow width={125} height={125} className={index2 === 0 ? 'division' : 'arrow'}/>
                    <PokemonChainLink
                      id={item2.id}
                      name={item2.name}
                    />
                </AlignedFlexRow>
              ))}
            </AlignedFlexRow>
          ))}
        </FlexCol>
      </EvolutionChainWrapper>
    </div>
  )
}

export default EvolutionChain