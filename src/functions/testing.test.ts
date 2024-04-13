import { expect, test } from '@jest/globals'

test('testing', () => {
  expect([undefined, undefined, 'fire'].filter(item => item)).toStrictEqual(['fire'])
})