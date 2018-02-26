/**
 * sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/




function sumPositives(arrayNumeros) {
    let suma = 0
    for (i = 0 ; i < arrayNumeros.length ; i++) {
      if (arrayNumeros[i] >= 0) {
         suma += arrayNumeros[i]
      } 
    }
    return suma
}
const printEx01 = sumPositives([1, -12, 3, -8])
console.log(printEx01)


// --------------- Don't Touch ------------------


console.group('JS Iterations Week');
  console.log('%cFunction: sumPositives', 'background-color: green; color: white')
  console.groupCollapsed('Should return 12 in the next [3, -1, 4, 5, -3, -4] series');
    console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
  console.groupEnd();

  console.groupCollapsed('Should return 170 in the next [-11, 30,-20, 40, 100] series');
    console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
  console.groupEnd();

  console.groupCollapsed('Should return 205 in the next [4 ,-10,-30, -4, 201] series');
    console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
  console.groupEnd();
console.groupEnd();
