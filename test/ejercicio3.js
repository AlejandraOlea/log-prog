let repiteme = (texto, numero) => {
  let resultado = "";
  for (let i = 0; i < numero; i++) {
    resultado += texto;
  }
  return resultado;
};

module.exports = repiteme;
