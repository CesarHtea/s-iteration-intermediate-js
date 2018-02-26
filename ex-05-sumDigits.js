/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

console.log("======= Ejercicio 5 =======")

// entra ("pasa") un numero
// se descompone el numero en sus digitos
// se suman los digitos

function sumDigits(digitosASumar) {
  let sumaDigitos
  // se convierte el numero a string
  numeroAString = digitosASumar.toString()  
  // se convierte el string a array
  sumaDigitos = numeroAString.split("") 
  let cajaTemporal = 0
  for (i = 0 ; i < sumaDigitos.length ; i++) {
    // se convierte cada elementos del array a numero
    digitoQueSeSuma = Number(sumaDigitos[i])
    cajaTemporal += digitoQueSeSuma
  }
  sumaDigitos = cajaTemporal
  return sumaDigitos
}

const printEx05 = sumDigits(406)
console.log(printEx05)

// --------------- Don't Touch ------------------


console.group('JS Iterations Week');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
  console.groupCollapsed('Should return 6 from "123"');
    console.assert(sumDigits(123) === 6)
  console.groupEnd();

  console.groupCollapsed('Should return 11 from "911"');
    console.assert(sumDigits(911) === 11)
  console.groupEnd();

  console.groupCollapsed('Should return 12 from "8040"');
    console.assert(sumDigits(8040) === 12)
  console.groupEnd();

  console.groupCollapsed('Should return 15 from "173220"');
    console.assert(sumDigits(173220) === 15)
  console.groupEnd();
console.groupEnd();
