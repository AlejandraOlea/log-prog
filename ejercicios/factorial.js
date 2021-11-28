//Dado un numero devolver su factorial
//el factorial de un numero es la multiplicacion de todo sus numeros hasta lletgar a el
//Ej:factorial de 3// devuelve 6 : 123

//Solucion mia
const factorial = (numero) => {
  let resultado = 1;
  for (let i = 1; i < numero; i++) {
    resultado = i * (i + 1);
  }
  return resultado;
};
console.log(factorial(3));

//Solucion del curso

const factorial2 = (numero) => {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
};
console.log(factorial2(3));

//1*2=2, 2*3=6, 3*4=12,
