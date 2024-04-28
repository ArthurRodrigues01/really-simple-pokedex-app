import { expect, test } from '@jest/globals'


test('testing', async () => {
  const parents = ['mother', 'father']
  const sons = ['son1', 'son2']
  const daughters = ['daughter1']

  const family = [parents, sons, daughters].flat()

  expect(family).toStrictEqual(['mother', 'father', 'son1', 'son2', 'daughter1'])
})