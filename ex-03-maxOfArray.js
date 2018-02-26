/**
 * maxOfArray()
 *
 * Write a function maxOfArray() that takes an array of
 * numbers as an argument and finds the highest number.
 *
**/

console.log("Ejericio 3")

// recibir un array
// evaluar cada elemento del array y arrojar el mayor

function maxOfArray(parametro) {
  let numMayor = 0
  for (i = 0 ; i < parametro.length ; i++) {    
    if ( numMayor < parametro[i] ) {
      numMayor = parametro[i]
    }
  }
  return numMayor
}
const arrayAEvaluar = [84,32,11,31,12,201]
const printEx03 = maxOfArray(arrayAEvaluar)
console.log(printEx03)


// --------------- Don't Touch ------------------


console.group('JS Iterations Week');
  console.log('%cFunction: maxOfArray', 'background-color: green; color: white')
  console.groupCollapsed('Should return 21 for the next [2, 7, 3, 4, 21, 0] series');
    console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
  console.groupEnd();

  console.groupCollapsed('Should return 100 for the next [100, 9, 8, 7, 6, 10] series');
    console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
  console.groupEnd();

  console.groupCollapsed('Should return 201 for the next [84, 32, 11, 31, 12, 201] series');
    console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
  console.groupEnd();
console.groupEnd();
