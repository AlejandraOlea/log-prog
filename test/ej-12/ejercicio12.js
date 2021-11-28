const aMayuscula = (texto) => {
  let resultado = [];

  for (let letra of texto.split(" ")) {
    resultado.push(letra[0].toUpperCase() + letra.substring(1));
  }
  return resultado.join(" ");
};

module.exports = aMayuscula;
