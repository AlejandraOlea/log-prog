//Dado un numero mostrar todos sus numeros divisores
//ej: divisores 12 son: 1,2,3,4,6,12

//Mi solucion
// const divisores = (numero) => {
//   let resultado = "";
//   for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//       resultado += i + " \n";
//     }
//   }
//   return resultado;
// };
// console.log(divisores(4));

//Solucion del curso

const divisor = (numero, posibles_divisor) => {
  if (numero % posibles_divisor === 0) {
    return posibles_divisor;
  }
  return false;
};
// console.log(divisor(4, 1));

const print = (numero) => {
  let esDivisor = [];
  for (let i = 1; i <= numero; i++) {
    if (divisor(numero, i)) {
      esDivisor.push(i);
    }
  }
  return esDivisor;
};
console.log(print(5));
