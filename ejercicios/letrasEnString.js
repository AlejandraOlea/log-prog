//Dado un string, devolver cuales son las letras que aparecen solo
//una vez y cual es la primera

//Mi solucion
const letras = (texto) => {
  let mapeoLetras = {};
  let unicas = [];
  for (letra of texto) {
    if (!mapeoLetras[letra]) {
      mapeoLetras[letra] = 1;
    } else {
      mapeoLetras[letra]++;
    }
  }
  for (letra in mapeoLetras) {
    if (mapeoLetras[letra] === 1) {
      unicas.push(letra);
    }
  }
  return `letras unicas: ${unicas}, primera: ${unicas[0]} `;
};
console.log(letras("aleluya"));

//solucion del curso

// const soloUnaVez = (letras) => {
//   let contadores = {},
//     resultado = [];
//   letras = letras.split("").filter((letra) => letra.trim().length >= 1);
//   //generar contadores
//   for (letra of letras) {
//     if (!contadores[letra]) {
//       contadores[letra] = 1;
//     } else {
//       contadores[letra]++;
//     }
//   }
//   //eliminar las letras que se repitan
//   for (letra in contadores) {
//     if (contadores[letra] === 1) {
//       resultado.push(letra);
//     }
//   }
//   return [resultado, resultado[0]];
// };
// console.log(soloUnaVez("aleluya omg"));
