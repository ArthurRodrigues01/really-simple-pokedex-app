import { getEvolutionChains } from "../functions/poke-functions";
import { ChainLink } from "../types/pokemon-related-types";
import EvolutionChainArrow from "./EvolutionChainArrow";
import { CenteredFlexRow, FlexCol, FlexRow, Title } from "./main-components";
import PokemonChainLink from "./PokemonChainLink";
import { EvolutionChainWrapper } from "./styles";

function EvolutionChain({ chainLink, color}: { chainLink: ChainLink, color: string }) {
  const result = getEvolutionChains(chainLink)

  if (result.branches[0].length === 0) {
    return (
      <EvolutionChainWrapper color={color}>
        <Title color="#fff">This Pokemon has no evolutions or pre-evolutions</Title>
      </EvolutionChainWrapper>
    )
  }

  return (
    <EvolutionChainWrapper color={color}>
      <CenteredFlexRow style={{gap: '3rem'}}>
        {
          result.base.map((item, index) => (
            <>
              <PokemonChainLink
                id={item.id}
                name={item.name}
                key={`pokemon-${item.id}`}
                />
                {
                  result.base.length > index + 1 && 
                  <EvolutionChainArrow width={125} height={50}/> 
                }
            </>
          ))
        }
        <FlexCol style={{gap: '3rem'}}>
          {
            result.branches.map(item => (
              <FlexRow style={{gap: '3rem', alignItems: 'center'}}>
                { item.map(
                    (item2) => (
                      <>
                        <EvolutionChainArrow width={125} height={50}/>
                        <PokemonChainLink
                          id={item2.id}
                          name={item2.name}
                          key={`pokemon-${item2.id}`}
                        />
                      </>
                    )
                  ) 
                }
              </FlexRow>
            ))
          }
        </FlexCol>
      </CenteredFlexRow>
    </EvolutionChainWrapper>
  )
}

export default EvolutionChain