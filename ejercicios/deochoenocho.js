//Dado un numero mostrar todos los numeros de ese al 0 de 8 en ocho
//En una lista con guiones y cada numero debe empezar por nº

// const ocho = (numero) => {
//   let resultado = `---Del ${numero} al 0 --- \n`;
//   while (numero > 0) {
//     resultado += `nº ${numero}\n`;
//     numero -= 8;
//   }
//   resultado += "---FIN---";
//   return resultado;
// };
// console.log(ocho(32));

//Dado un numero mostrar todos los numeros hasta el 0, de 8 en ocho
//En una lista con guiones y cada numero debe empezar por nº

const ocho = (numero) => {
  let resultado = `Del ${numero} hasta el 0 hay: \n`;
  while (numero > 0) {
    resultado += `nº ${numero} \n`;
    numero -= 8;
  }
  if (numero <= 0) {
    resultado += `nº 0 \n`;
  }
  resultado += `--FIN--`;
  return resultado;
};
console.log(ocho(89));
