//Dada una cadena de texto poner en mayusucula la primera letra
//de cada palabra y luego devolver la cadena

//Solucion 1

// const primeraEnMayuscula = (texto) => {
//   let resultado = "";

//   for (letra in texto) {
//     if (texto[letra - 1] === " " || parseInt(letra) === 0) {
//       resultado += texto[letra].toUpperCase();
//     } else {
//       resultado += texto[letra];
//     }
//   }
//   return resultado;
// };
// console.log(primeraEnMayuscula("hola raton con cola"));

//Solucion 2
// const primeraEnMayuscula = (texto) => {
//   let palabras = [];

//   for (let palabra of texto.split(" ")) {
//     palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
//   }
//   return palabras.join(" ");
// };
// console.log(primeraEnMayuscula("hola raton con cola"));

//Dada una cadena de texto poner en mayusucula la primera letra
//de cada palabra y luego devolver la cadena

//Solucion 1
// const aMayuscula = (texto) => {
//   let resultado = "";

//   for (letra in texto) {
//     if (texto[letra - 1] === " " || parseInt(letra) === 0) {
//       resultado += texto[letra].toUpperCase();
//     } else {
//       resultado += texto[letra];
//     }
//   }
//   return resultado;
// };
// console.log(aMayuscula("ja ja ja ja"));

//Solucion 2
const aMayuscula = (texto) => {
  let resultado = [];

  for (let letra of texto.split(" ")) {
    resultado.push(letra[0].toUpperCase() + letra.substring(1));
  }
  return resultado.join();
};
console.log(aMayuscula("ja ja ja ja"));

// for (let palabra of texto.split(" ")) {
//     palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
