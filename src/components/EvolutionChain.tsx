import { ChainLink, NamedAPIResource } from "../types/pokemon-related-types";
import { CenteredFlexCol, FlexRow } from "./main-components";

function EvolutionChain({ chainLink }: { chainLink: ChainLink }) {
  function getAllSpeciesFromChain(
    chain: ChainLink, 
    returnArr: { species: NamedAPIResource, depth: number }[] = [], 
    index = 0
  ) {
    returnArr.push({ species: chain.species, depth: index})
    for (const link of chain.evolves_to) {
      getAllSpeciesFromChain(link, returnArr, index + 1)
    }

    return returnArr
  }

  function getAllEvolutionChains(arr: { species: NamedAPIResource, depth: number}[]) {
    let returnObj: { 
      [k: string]: string[]
     } = {}
     
    for (const item of arr) {
      if (returnObj[`depth_${item.depth}`]) {
        returnObj[`depth_${item.depth}`] = [...returnObj[`depth_${item.depth}`], item.species.name]
      } else {
        returnObj[`depth_${item.depth}`] = [item.species.name]
      }
    }

    return returnObj
  }

  const allSpecies = getAllSpeciesFromChain(chainLink)
  const allEvolutionChains = getAllEvolutionChains(allSpecies)
  let some: string[][] = []

  for (let i = 0; i < Object.getOwnPropertyNames(allEvolutionChains).length; i++) {
    some.push(allEvolutionChains[`depth_${i}`])
  }

  if (some.length === 1) {
    return <h1>This Pokemon is not in a evolution chain</h1>
  }

  return (
    <FlexRow style={{gap: '3rem'}}>
      {
        some.map(item => (
          <CenteredFlexCol>
            { item.map(subItem => <h2>{subItem}</h2>) }
          </CenteredFlexCol>
        ))
      }
    </FlexRow>
  )
}

export default EvolutionChain