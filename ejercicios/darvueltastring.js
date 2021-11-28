//Dada una cadena de caracteres darle la vuelta sin usar métodos.

// const alReves = (texto) => {
//   let invertido = "";
//   for (letra of texto) {
//     invertido = letra + invertido;
//   }
//   return invertido;
// };
// console.log(alReves("abcdefg"));

const alRevesConMetodos = (texto) => {
  let alReves = texto.split("").reverse().join("");
  console.log(alReves);
};
alRevesConMetodos("bdcefghi");
