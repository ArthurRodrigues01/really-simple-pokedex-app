import { useEffect, useMemo, useState } from "react";

import {
  getEvolutionChains,
  getPokemonTypeColor,
  getPokemonWrapperTypeColor
} from "../../functions/poke-functions";
import { ChainLink, PokemonPreviewData } from "../../types/pokemon-related-types";
import { Title } from "../main-components";
import { PokemonSectionTitleWrapper, SectionWrapper } from "../styles";
import {
  PokemonEvolutionChainGridArea,
  PokemonEvolutionChainGridCell,
  PokemonEvolutionChainWrapper
} from "../styles/pokemonEvolutionChain-styles";
import PokemonChainLink from "./PokemonChainLink";
import PokemonEvolutionChainArrow from "./PokemonEvolutionChainArrow";

function addArrowDivs(arr: PokemonPreviewData[]) {
  let some: PokemonPreviewData[] = []
  let c = 0
  for (let i = 0; i < arr.length * 2 - 1; i++) {
    if (i % 2 !== 0) {
      some.push({id: 1, name: 'arrow'})
    } else {
      some.push(arr[c])
      c++
    }
  }

  return some
}

function PokemonEvolutionChain({ chainLink, type }: { chainLink: ChainLink, type: string}) {
  const result = getEvolutionChains(chainLink)
  const [currBase, setCurrBase] = useState(addArrowDivs(result.base));
  const [currBranches, setCurrBranches] = useState(result.branches.map(item => [{id: 1, name: 'arrow'}, ...addArrowDivs(item)]));
  const rows = useMemo(() => currBranches.length, [currBranches])

  useEffect(() => {
    setCurrBase(addArrowDivs(result.base))
    setCurrBranches(result.branches.map(item => [{id: 1, name: 'arrow'}, ...addArrowDivs(item)]))
  }, [chainLink])
  
  if (result.branches[0].length === 0) {
    return (
      <SectionWrapper >
        <PokemonSectionTitleWrapper  $backgroundColor={getPokemonTypeColor(type)}>
          <Title>Evolution Chain</Title>
        </PokemonSectionTitleWrapper>
        <PokemonEvolutionChainWrapper $backgroundColor={getPokemonWrapperTypeColor(type)}>
          <Title>This Pokemon is not in a evolution chain.</Title>
        </PokemonEvolutionChainWrapper>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="parent">
      <PokemonSectionTitleWrapper id="pokemon" $backgroundColor={getPokemonTypeColor(type)}>
        <Title>Evolution Chain</Title>
      </PokemonSectionTitleWrapper>
      <PokemonEvolutionChainGridArea $backgroundColor={getPokemonWrapperTypeColor(type)}>
        {currBase.map((item, index) => {
          if (item.name === 'arrow') {
            return (
              <PokemonEvolutionChainGridCell 
                $gridRow={`span ${rows}`} 
                key={`arrow-${index}`}
              >
                <PokemonEvolutionChainArrow width={125} height={125}/>
              </PokemonEvolutionChainGridCell>
            )
          }

          return (
            <PokemonEvolutionChainGridCell 
              $gridRow={`span ${rows}`} 
              key={`pokemon-${item.id}`}
            >
              <PokemonChainLink
                id={item.id}
              />
            </PokemonEvolutionChainGridCell>
          )
        })}
        {currBranches.map((item, index) => {
          return item.map((item2, index2) => {
            if (item2.name === 'arrow') {
              if (index2 === 0) {
                const half = Math.floor(currBranches.length / 2)

                let arrowDirection = ''

                if (half > index) {
                  arrowDirection = 'up'
                } else if (half < index) {
                  arrowDirection = 'down'
                } else {
                  if (currBranches.length % 2 === 0) {
                    arrowDirection = 'down'
                  }
                }

                return (  
                  <PokemonEvolutionChainGridCell 
                    $gridRow={`${index + 1}`}
                    $gridColumn={`${currBase.length + 1 + index2}`}
                    key={`arrow-${index}-${index2}`}
                  >
                    <PokemonEvolutionChainArrow width={125} height={125} direction={arrowDirection}/>
                  </PokemonEvolutionChainGridCell>
                ) 
              } 
              
              return (
                <PokemonEvolutionChainGridCell 
                  $gridRow={`${index + 1}`}
                  $gridColumn={`${currBase.length + 1 + index2}`}
                  key={`arrow-${index}-${index2}`}
                >
                  <PokemonEvolutionChainArrow width={125} height={125}/>
                </PokemonEvolutionChainGridCell>
              )
            }
            
            return (
              <PokemonEvolutionChainGridCell 
                $gridRow={`${index + 1}`}
                $gridColumn={`${currBase.length + 1 + index2}`}
                key={`pokemon-${item2.id}`}
              >
                <PokemonChainLink
                  id={item2.id}
                />
              </PokemonEvolutionChainGridCell>
            )
          })
        })}
      </PokemonEvolutionChainGridArea>
    </SectionWrapper>
  )
}

export default PokemonEvolutionChain