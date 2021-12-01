//Dado un texto contar cuantas vocales y consonantes tiene

//solucion mia
// const contadorVocalesConsonantes = (texto) => {
//   let vocales = 0;
//   let consonantes = 0;
//   for (letra of texto) {
//     if (letra.match(/[aeiou]/gi)) {
//       vocales++;
//     } else {
//       consonantes++;
//     }
//   }

//   return { vocales, consonantes };
// };
// console.log(contadorVocalesConsonantes("Hola guachita"));

//solucion del curso
const cuentaLetras = (texto) => {
  let consonantes = 0,
    vocales = 0,
    textolimpio = "";

  textolimpio = texto
    .split("")
    .filter((letra) => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
    .join("");

  for (letra of textolimpio) {
    if (/[aeiouáéíóú]/gi.test(letra)) {
      vocales++;
    } else {
      consonantes++;
    }
  }

  return { consonantes, vocales };
};
console.log(cuentaLetras("Hola caracola ,! ...,2,3,4"));

//Dado un texto contar cuantas vocales y consonantes tiene
