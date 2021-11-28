const capicua = (numero) => {
  let resultado = parseInt(numero.toString().split("").reverse().join(""));
  return numero === resultado;
};
module.exports = capicua;
