const cuentaVocales = (texto) => {
  let coincidencias = texto.match(/[aeiou]/gi);
  return coincidencias ? coincidencias.length : 0;
};
// console.log(cuentaVocales("abecedario"));

module.exports = cuentaVocales;
