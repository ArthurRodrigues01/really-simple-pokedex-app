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
/**
 * Get items that are common in both object arrays, equality parameter
 * is defined by if a certain property exists and if values are equal in two objects in both arrays.
 * 
 * WARNING: unexpected results may happen if you pass a non-object parameter to the function.
 * @param arr1 an array of objects.
 * @param arr2 an array of objects.
 * @param propertyKey a unique property key which it's value is certain to be unique
 *  in both arrays that were passed as parameters.  
 * @example getCommonItemsFromObjectArrays([{id: 'a'}, {id: 'b'}], [{id: 'b'}], 'id') // out: [{ id: 'b'}]
 */
function getCommonItemsFromObjectArrays(
  arr1: any[], 
  arr2: any[], 
  propertyKey: string
): any[]{
  for (const obj of arr1) {
    if (obj.hasOwnProperty(propertyKey) === false || isPropertyOfTypeString(obj, propertyKey) === false) {
      return []
    }
  }
  for (const obj of arr2) {
    if (obj.hasOwnProperty(propertyKey) === false || isPropertyOfTypeString(obj, propertyKey) === false) {
      return []
    }
  }

  return arr1.filter(item => {
    return arr2.find(item2 => {
      return item[propertyKey] === item2[propertyKey]
    })
  })
}
/**
 * Checks if a certain property value, of a certain object passed, is of type string.
 * 
 * WARNING: unexpected results may happen if you pass a non-object parameter to the function.
 * @param obj an object(PokemonPreviewData) which it is expected
 *  a defined property value to be of type string  
 * @param propertyKey a property key which it is certain to be in the object.
 */
function isPropertyOfTypeString(obj: any, propertyKey: string) {
  return typeof obj[propertyKey] === 'string'
}
/**
 * Checks if a certain object is an empty object, that is 
 * an object which has no properties defined({}).
 * 
 * WARNING: unexpected results may happen if you pass a non-object parameter to the function. 
 * @param obj an object to be checked.
 */
function isObjectEmpty(obj: any) {
  return Object.getOwnPropertyNames(obj).length === 0
}

function isAnyPropertyNull(obj: any) {
  for (const value of Object.values(obj)) {
    if (value === null) return true
  }

  return false
}

function areAllValuesTrue(arr: boolean[]) {
  for (const value of arr) {
    if (value === false) return false
  }

  return true
}

export { 
  isNaturalNumber, 
  isInRange, 
  capitalize,
  getCommonItemsFromObjectArrays,
  isObjectEmpty,
  isAnyPropertyNull,
  areAllValuesTrue
}