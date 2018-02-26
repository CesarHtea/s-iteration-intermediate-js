
/** ! Adventure Mode !
 *
 * hasComplements() *
 *
 * Write a function called hasComplements that accepts a target number
 * and an array of numbers
 *
 * If the sum of any two numbers in the array of numbers equals the
 * target number , then the function should return `true`,
 * otherwise, the function should return `false`.
 *
*/

console.log("===== Exercise 06 =====")

// entra un target y un array
// si dos de los elementos del array suman el target
// return: true

var anotherArray = [2, 5, 6, 8, 12]

function hasComplements(target, array) {
  let suma = 0
  let targetComplemento = 0
  let bool = false
  for (i = 0 ; i <= (array.length-1) ; i++) {
    // toma el primer elemento y comparar las sumas con todos los demas
    // si alguna suma es igual al target, retorna true
    targetComplemento = array[i]
    for (index = i ; index <= (array.length-1) ; index++) {
      if (targetComplemento + array[index+1] === target) {
        bool = true
      } 
    }
  }
  return bool
}
const printEx06 = hasComplements(15, anotherArray)
console.log(printEx06)




// --------------- Don't Touch ------------------

/*

var oddsArray = [1, 3, 5, 7, 9, 11, 13]
var anotherArray = [2, 5, 6, 8, 12]

console.group('JS Iterations Week');
  console.log('%cFunction: hasComplements', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for 6');
    console.assert(hasComplements(6,  oddsArray) === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for 7');
    console.assert(hasComplements(7, oddsArray) === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for 14');
    console.assert(hasComplements(14, oddsArray) === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for 17');
    console.assert(hasComplements(17, oddsArray) === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for 7 ');
    console.assert(hasComplements(7, anotherArray) === true)
  console.groupEnd();
  console.groupCollapsed('Should return false for 9');
    console.assert(hasComplements(9,  anotherArray) === false)
  console.groupEnd();
  console.groupCollapsed('Should return true for 14');
    console.assert(hasComplements(14, anotherArray) === true)
  console.groupEnd();
  console.groupCollapsed('Should return false for 15');
    console.assert(hasComplements(15, anotherArray) === false)
  console.groupEnd();
console.groupEnd();

*/