/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
**/

console.log("====== Ejercicio 4 ======")

// entra ("se pasa") un string de palabras
// se evalua la longitud de cada palabra
// se regresa la palabra mas grande

function findLongestWord(stringAEvaluar) {
  // se retira lo que no sea una letra del string
  let stringSoloLetras = ""
  arrayTemporal = stringAEvaluar.split("")
  for (i = 0 ; i < arrayTemporal.length ; i++) {
    // si el caracter a evaluar no es una letra, se saca del string
    if (arrayTemporal[i] === " " || arrayTemporal[i] === "a" || arrayTemporal[i] === "b" || arrayTemporal[i] === "c" || arrayTemporal[i] === "d" || arrayTemporal[i] === "e" || arrayTemporal[i] === "f" || arrayTemporal[i] === "g" || arrayTemporal[i] === "h" || arrayTemporal[i] === "i"  || arrayTemporal[i] === "j" || arrayTemporal[i] === "k" || arrayTemporal[i] === "l" || arrayTemporal[i] === "m" || arrayTemporal[i] === "n" || arrayTemporal[i] === "o" || arrayTemporal[i] === "p" || arrayTemporal[i] === "q" || arrayTemporal[i] === "r" || arrayTemporal[i] === "s" || arrayTemporal[i] === "t" || arrayTemporal[i] === "u" || arrayTemporal[i] === "v" || arrayTemporal[i] === "w" || arrayTemporal[i] === "x" || arrayTemporal[i] === "y" || arrayTemporal[i] === "z"
        || arrayTemporal[i] === "A" || arrayTemporal[i] === "B" || arrayTemporal[i] === "C" || arrayTemporal[i] === "D" || arrayTemporal[i] === "E" || arrayTemporal[i] === "F" || arrayTemporal[i] === "G" || arrayTemporal[i] === "H" || arrayTemporal[i] === "I"  || arrayTemporal[i] === "J" || arrayTemporal[i] === "K" || arrayTemporal[i] === "L" || arrayTemporal[i] === "M" || arrayTemporal[i] === "N" || arrayTemporal[i] === "O" || arrayTemporal[i] === "P" || arrayTemporal[i] === "Q" || arrayTemporal[i] === "R" || arrayTemporal[i] === "S" || arrayTemporal[i] === "T" || arrayTemporal[i] === "U" || arrayTemporal[i] === "V" || arrayTemporal[i] === "W" || arrayTemporal[i] === "X" || arrayTemporal[i] === "Y" || arrayTemporal[i] === "Z") { 
      // se rehace el string
      stringSoloLetras += arrayTemporal[i]
    }
  }
  // se divide el string y se convierte a array
  let arrayAnteString = stringSoloLetras.split(" ")
  // se prepara la caja donde quedara la longest word
  let longestWord = ""
  // se compara cada palabra del arrayAnteString con cada palabra
  for (i = 0 ; i < arrayAnteString.length ; i++ ) {
    if ( longestWord.length < arrayAnteString[i].length) {
        longestWord = arrayAnteString[i]
    }
  }
  return longestWord
}
const printEx04 = findLongestWord("don't mess with Texas")
console.log(printEx04)



// --------------- Don't Touch ------------------


console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();

