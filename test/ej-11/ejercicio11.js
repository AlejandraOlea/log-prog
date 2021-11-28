const recortado = (texto, numero) => {
  let resultado = "";
  if (typeof texto === "string" && typeof numero === "number") {
    resultado = texto.replace(/[^\w]/gi, "").substring(0, numero);
  } else {
    resultado = "introduce bien los datos!";
  }
  return resultado;
};

module.exports = recortado;
