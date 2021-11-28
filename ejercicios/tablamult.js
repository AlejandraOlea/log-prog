//Dado un numero devolver su tabla de multiplicar completa

// const tablaCompleta = (numero) => {
//   let resultado = `#Tabla del ${numero}#`;
//   for (let i = 1; i <= numero; i++) {
//     let multiplicacion = i * numero;

//     resultado += `\n ${i} x ${numero} = ${multiplicacion}`;
//   }
//   return resultado;
// };
// console.log(tablaCompleta(9));

const tablaDeNumero = (numero) => {
  let resultado = ` Tabla del ${numero}`;
  for (let i = 1; i <= numero; i++) {
    let multiplicación = i * numero;
    resultado += `\n ${i} x ${numero} = ${multiplicación}`;
  }
  return resultado;
};
console.log(tablaDeNumero(1));
