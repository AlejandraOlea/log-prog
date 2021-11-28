const factorial2 = (numero) => {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
};

module.exports = factorial2;
