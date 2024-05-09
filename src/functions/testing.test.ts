import { expect, test } from '@jest/globals'

test('testing', async () => {
  const arr = ['something', 'something-else']
  expect(arr.join('&')).toBe('something&something-else')
})