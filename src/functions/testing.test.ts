import { expect, test } from '@jest/globals'

import { getPokemonData } from './poke-functions'

test('testing', async () => {
  expect((await getPokemonData(260))?.weaknesses).toEqual(['grass'])
})