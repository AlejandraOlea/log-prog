//Dada una cadena de texto, devolver cuantas vocales

const cuentaVocales = (texto) => {
  let coincidencias = texto.match(/[aeiou]/gi);
  return coincidencias ? coincidencias.length : 0;
};
console.log(cuentaVocales("abecedario"));

//Entontrar cuantas vocales tiene
// const cuenta = (texto) => {
//   const contadas = texto.match(/[aeiou]/gi);
//   return contadas ? contadas.length : 0;
// };
// console.log(cuenta("bd"));
