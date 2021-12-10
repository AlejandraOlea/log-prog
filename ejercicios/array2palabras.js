//Dado un array de strings, devolver otro con los valores que esten formados por mas de una palabra

let arr = ["hola", "hola caracola", "bye", "pio pio"];

let arrDosElementos = (arrElementos) => {
  let resultado = [];
  for (elemento of arrElementos) {
    if (elemento.split(" ").length >= 2) {
      resultado.push(elemento);
    }
  }
  return resultado;
};
console.log(arrDosElementos(arr));
