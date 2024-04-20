import { expect, test } from '@jest/globals'
import { removeNonPokemonSpeciesObjectsFromArray } from './poke-functions'
import { NamedAPIResource } from '../types/pokemon-related-types'


test('testing', async () => {
  const res = await fetch('https://pokeapi.co/api/v2/type/12')
  const rawData = await res.json()
  const filtered: NamedAPIResource[] = rawData.pokemon.map((item: {
    pokemon: NamedAPIResource,
    slot: number
  }) => item.pokemon)
  const a = removeNonPokemonSpeciesObjectsFromArray(filtered)
  const b = a.filter(item => item.name === 'shaymin-sky')

  expect(b).toBe([undefined])
})