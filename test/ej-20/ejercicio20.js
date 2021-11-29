const angulo = (numero) => {
  let resultado = "";
  if (numero > 0 && numero < 90) {
    resultado = "agudo";
  } else if (numero === 90) {
    resultado = "recto";
  } else if (numero > 90 && numero < 180) {
    resultado = "obtuso";
  } else if (numero === 180) {
    resultado = "llano";
  } else if (numero > 180 && numero < 360) {
    resultado = "concavo";
  } else if (numero === 360) {
    resultado = "completo";
  }
  return resultado;
};
module.exports = angulo;
