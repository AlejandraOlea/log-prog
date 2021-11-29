//Dados dos numeros devolver los ressultado de las operaciones basicas
//entre ellos

//Solucion mia
const opeBasic = (number1, number2) => {
  let suma = number1 + number2;
  let resta = number1 - number2;
  let multiplica = number1 * number2;
  let divide = number1 / number2;
  return [suma, resta, multiplica, divide];
};
console.log(opeBasic(5, 5));

//Solucion curso

// const calculadora = (numero1, numero2) => {
//   return (resultado = `
//     La suma es = ${numero1 + numero1}
//     La resta es = ${numero1 - numero1}
//     La multiplicacion es = ${numero1 * numero1}
//     La division es = ${numero1 / numero1}
//     `);
// };
// console.log(calculadora(5, 5));
