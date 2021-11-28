//Dado un numero, mostrar los numeros del 1 hasta el numero, para multiplos de 3 imprimir
//buzz, para los de 5 imprimir lightyear, para multimplos de 3 y 5 imprimir "buzzlightyear"

// const buzzLight = (numero) => {
//   let resultado = "";
//   if (numero % 3 === 0 && numero % 5 === 0) {
//     resultado = "buzzligthyear";
//   } else if (numero % 3 === 0) {
//     resultado = "buzz";
//   } else if (numero % 5 === 0) {
//     resultado = "lightyear";
//   } else {
//     return numero;
//   }
//   return resultado;
// };
// // console.log(buzzLight(5));

// const print = (numero) => {
//   for (let i = 1; i <= numero; i++) {
//     console.log(buzzLight(i));
//   }
// };
// print(15);

//Dado un numero, mostrar los numeros del 1 hasta el numero, para multiplos de 3 imprimir
//buzz, para los de 5 imprimir lightyear, para multimplos de 3 y 5 imprimir "buzzlightyear"

const buzz = (numero) => {
  let resultado = "";

  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "buzzlightyear";
  } else if (numero % 5 === 0) {
    resultado = "buzz";
  } else if (numero % 3 === 0) {
    resultado = "lightyear";
  } else {
    return numero;
  }
  return resultado;
};
// console.log(buzz(1));

const print = (numero) => {
  for (let i = 1; i <= numero; i++) {
    let result = buzz(i);
    console.log(result);
  }
};
print(15);
