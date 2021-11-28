//Dada una cadena de texto y un numero, recortar el string mostrando los x numero de caracteres

const recortado = (texto, numero) => {
  let resultado = "";
  if (typeof texto === "string" && typeof numero === "number") {
    resultado = texto.replace(/[^\w]/gi, "").substring(0, numero);
  } else {
    resultado = "introduce bien los datos!";
  }
  return resultado;
};
console.log(recortado("holacaracola   ", 6));
