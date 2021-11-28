//Dada una cadena de texto, comprobar si es palindromo
//Palindromo es una palabra que se lee igual aun invertida.  ej: ana

const pali = (texto) => {
  let pali = texto.split("").reverse().join("");
  return pali === texto;
};
console.log(pali("otto"));
