import { expect, test } from '@jest/globals'


test('testing', async () => {
  const fam = ['father', 'son1', 'son2', 'mother', 'daughter1']
  const par = ['mother', 'father']
  // const woman = ['mother']

  const some = [fam, par]

  function getCommon(arr: string[], arr2: string[]) {
    let resultarr = []
    
    for (const item of arr) {
      for (const item2 of arr2) {
        if (item === item2) resultarr.push(item)
      }
    }

    return resultarr
  }

  const sanitized = some.filter(item => item !== null)

  const res = sanitized.reduce((prev, curr, index) => {
    if (index === 0) return curr

    return getCommon(prev!, curr!)
  })

  expect(res).toStrictEqual(['father', 'mother'])

  // const array: number[] = []

  // expect(array.reduce((prev, curr) =>  prev + curr, []))
})