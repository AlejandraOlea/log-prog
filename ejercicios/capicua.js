//Dado un numero indicar si es capicua(se leen igual de izquierda a derecha o viceversa)
//Ej: 2002 //return true------2014//Return false

const capicua = (numero) => {
  let resultado = parseInt(numero.toString().split("").reverse().join(""));
  return numero === resultado;
};
console.log(capicua(121));
