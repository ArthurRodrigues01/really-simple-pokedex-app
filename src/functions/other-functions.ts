
/**
 * Checks if a number is a natural number (0,1,2,3,4,...,n) or not.
 * 
 * @param number a number to be checked 
 */
function isNaturalNumber(number: number) {
  return (
    isFinite(number) && 
    !isNaN(number) && 
    Math.trunc(number) === number &&
    number > -1
  ) 
}
/**
 * Checks if a number is in a certain range of numbers, including minimum and maximum values.
 * 
 * @param number a number to be checked
 * @param max maximum value
 * @param min minimum value, defaults to 1.
 */
function isInRange(number: number, max: number, min = 1) {
  return number >= min && number <= max
}
/**
 * Capitalizes the first character of a string and converts all the other characters to lower-case.
 * 
 * @param word a string to be capitalized
 * @returns a capitalized string 
 */
function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function getCommonItemsFromObjectArrays(arr1: Object[], arr2: Object[], propertyKey: string): any[]{
  for (const obj of arr1) {
    if (!obj.hasOwnProperty(propertyKey) || typeof obj[propertyKey as keyof Object] !== 'string') {
      return []
    }
  }
  for (const obj of arr2) {
    if (!obj.hasOwnProperty(propertyKey) || typeof obj[propertyKey as keyof Object] !== 'string') {
      return []
    }
  }

  return arr1.filter(item => {
    return arr2.find(item2 => {
      return item[propertyKey as keyof Object] === item2[propertyKey as keyof Object]
    })
  })
} 

export { 
  isNaturalNumber, 
  isInRange, 
  capitalize,
  getCommonItemsFromObjectArrays
}