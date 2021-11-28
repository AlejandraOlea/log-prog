//Dados dos numeros devolver cuantos numeros impares hay entre ellos.

// const oddNumber = (number1, number2) => {
//   let contador = 0;
//   for (let i = number1; i < number2; i++) {
//     if (i % 2 !== 0) {
//       contador++;
//     }
//   }
//   return contador;
// };
// console.log(oddNumber(1, 10));

//Usando while
const impares = (numero1, numero2) => {
  let contador = 0;
  while (numero1 < numero2) {
    if (numero1 % 2 !== 0) {
      contador++;
    }
    numero1++;
  }

  return `${contador} Odd numbers`;
};
console.log(impares(1, 100));
