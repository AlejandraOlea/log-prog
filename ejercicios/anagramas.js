//Dadas dos cadenas de texto crear un algoritmo que comprueba si son anagramas entre si
//si usa los mismos caractres en la misma cantidad
//ej: ("riesgo, "sergio)//devuelve true

//Solucion mia

// const anagramas = (string1, string2) => {
//   let texto1 = string1
//     .replace(/[^\w]/gi, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
//   let texto2 = string2
//     .replace(/[^\w]/gi, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
//   return texto1 === texto2;
// };
// console.log(anagramas("RIESGO", "sergio"));

const preparaTexto = (texto) => {
  return texto.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
};

const estableceAnagrama = (texto1, texto2) => {
  return preparaTexto(texto1) === preparaTexto(texto2);
};
console.log(estableceAnagrama("sergio", "rieso"));
