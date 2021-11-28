//Dado una array de enteros y un numero, ver si es una permutacion del 1 al nº
//permutacion es una secuencia de numeros en ordne sin que falte ninguno

const permutacion = (secuencia, numero) => {
  for (let i = 0; i < numero; i++) {
    if (secuencia.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
};
console.log(permutacion([1, 2, 3, 4, 5], 5));
