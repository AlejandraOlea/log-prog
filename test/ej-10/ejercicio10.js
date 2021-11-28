const limpiarTexto = (texto) => {
  return texto.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
};

module.exports = limpiarTexto;
