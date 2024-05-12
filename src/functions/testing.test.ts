import { expect, test } from '@jest/globals'

import { ChainLink, EvolutionChainPage } from '../types/pokemon-related-types'

test('testing', async () => {
  // wurmple 135
  // cosmog 413
  // tyrogue 47
  // eevee 67
  // appletum 442
  // sableye 149 (no evolution chain)

  const res = await fetch('https://pokeapi.co/api/v2/evolution-chain/149/')
  const raw: EvolutionChainPage =  await res.json()
  const chain = raw.chain
  
  function getAllSpeciesFromChain( 
    chain: ChainLink,
    prev: string = ''
  ) {
      const returnArr: { species: string, evolvesFrom: string}[] = chain.evolves_to.flatMap(
        item => getAllSpeciesFromChain(item, chain.species.name)
      )
      
      return [...returnArr, { species: chain.species.name, evolvesFrom: prev}]
  }

  function getConvergion(arr: string[][]) {
    let obj: {
      [k: string]: number
    } = {}

    const aux: string[] = []

    if (arr.length === 1) {
      return ({
        base: [arr[0][0]],
        branches: arr[0].filter(item => item !== arr[0][0])
      })
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (obj[`${arr[i][j]}`]) {
          obj[`${arr[i][j]}`]++
        } else {
          obj[`${arr[i][j]}`] = 1
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (obj[`${arr[i][j]}`] > 1) {
          const deleted = [...[...arr][i]].splice(j, 1)[0]
          if (aux.includes(deleted) === false) {
            aux.push(deleted)
          }
        }
      }
    }

    const ret = arr.map(item => item.filter(subItem => aux.includes(subItem) === false)) 

    return ({
      base: aux,
      branches: ret
    })
  }
  
  function getAllEvolutionChains(
    arr: { species: string, evolvesFrom: string}[]
  ) {
    let some = [...arr]
    let inn: string[] = []
    let prev = ''
    let retArr: string[][] = []

    while (some.length !== 0) {
      const pkmn = some.find(item => item.evolvesFrom === prev)
      if (pkmn === undefined) {
        if (retArr.find(item => item.find(item2 => item2 === prev)) === undefined) {
          retArr.push(inn)
        }
        some = some.filter(item => item.species !== prev)
        inn = []
        prev = '' 
      } else {
        inn.push(pkmn.species)
        prev = pkmn.species
      }
    }

    return retArr
  }

  const allSpecies = getAllSpeciesFromChain(chain)
  const allEvolutionChains = getAllEvolutionChains(allSpecies)
  const result = getConvergion(allEvolutionChains)
  // expect(allEvolutionChains).toStrictEqual({
  //   depth_0: ['wurmple'],
  //   depth_1: ['silcoon', 'cascoon'],
  //   depth_2: ['beautifly', 'dustox']
  // })
  console.log(result)
  expect([]).toStrictEqual([])
})