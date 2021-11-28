//Dado un string ponerlo completo en mayuscula o minuscula dependiendo de
//si hay mas mayusculas o minusculas.

const mayoOminu = (texto) => {
  let mayusculas = 0;
  let minusculas = 0;
  let resultado = "";

  for (letra of texto)
    if (/[A-Z]/.test(letra)) {
      mayusculas++;
    } else {
      minusculas++;
    }

  if (mayusculas > minusculas) {
    resultado = texto.toUpperCase();
  } else {
    resultado = texto.toLowerCase();
  }

  return resultado;
};
console.log(mayoOminu("ajajJaJAJAJAJJAJAJjajajajajaj"));
