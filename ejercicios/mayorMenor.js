//Dados dos numeros indicar cual es mayor y cual es menor

//mi solucion

const mayorMenor = (numero1, numero2) => {
  if (typeof numero1 !== "number" || typeof numero1 !== "number")
    return "Input is not a number, please enter a number, do it!";
  let resultado = 0;
  if (numero1 > numero2) {
    resultado = `el numero mayor es ${numero1} y el menor es ${numero2}`;
  } else if (numero1 < numero2) {
    resultado = `el numero mayor es ${numero2} y el menor es ${numero1}`;
  } else {
    resultado = `${numero1} es igual a ${numero2}`;
  }
  return resultado;
};
console.log(mayorMenor(18, 8));

//Solucion del curso
// const numeroMayor = (numero1, numero2) => {
//   let resultado = "";
//   if (numero1 === numero2) {
//     return "son iguales";
//   } else if (numero1 > numero2) {
//     resultado = `el numero mayor es el ${numero1}`;
//     resultado += `el numero menor es el ${numero2}`;
//   } else if (numero1 > numero2) {
//     resultado = `mmel numero menor es el ${numero1}`;
//     resultado += `el numero mayor es el ${numero2}`;
//   } else {
//     resultado = "input no valido";
//   }
//   return resultado;
// };
// console.log(numeroMayor(23455, 2));
