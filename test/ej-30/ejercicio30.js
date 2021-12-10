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

module.exports = arrDosElementos;
