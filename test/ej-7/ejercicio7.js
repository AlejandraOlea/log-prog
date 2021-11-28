const buzzLight = (numero) => {
  let resultado = "";
  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "buzzligthyear";
  } else if (numero % 3 === 0) {
    resultado = "buzz";
  } else if (numero % 5 === 0) {
    resultado = "lightyear";
  } else {
    return numero;
  }
  return resultado;
};

module.exports = buzzLight;
