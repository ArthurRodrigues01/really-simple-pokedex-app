import { expect, test } from '@jest/globals'


test('testing', async () => {
  let arr: number[] = new Array(3)

  expect(arr).toStrictEqual([0,0,0])
})