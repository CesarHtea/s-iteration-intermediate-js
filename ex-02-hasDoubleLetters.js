/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

// tomar la primera posicion de la string
// comparar la primera posicion con la segunda
// si son iguales entonces return bool = "true"
// si no son iguales entonces sigue comparando la segunda posicion con la tercera

function hasDoubleLetters(stringARevisar) {
    
    let bool = false
    for ( i = 0 ; i < (stringARevisar.length-1) ;  i++ ) {
        if ( stringARevisar[i].toUpperCase() === stringARevisar[i+1].toUpperCase() ) {
          bool = true
        }
    }
    return bool
}
const printEx02 = hasDoubleLetters("Hello")
console.log(printEx02)


// --------------- Don't Touch ------------------


console.group('JS Iterations Week');
  console.log('Function: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('stutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();
