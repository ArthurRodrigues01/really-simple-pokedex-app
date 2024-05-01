import { expect, test } from '@jest/globals'

test('testing', async () => {
  const arr = 'something'
  expect(Array.isArray(arr)).toBe(false)
})