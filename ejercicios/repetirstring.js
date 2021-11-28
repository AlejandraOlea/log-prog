// //Repetir un string n numero de veces

let repiteme = (texto, numero) => {
  let resultado = "";
  for (let i = 0; i < numero; i++) {
    resultado += texto;
  }
  return resultado;
};

console.log(repiteme("guagua", 4));

// //Repetir un string n numero de veces

// // const repiteme = (texto, numero) => {
// //   let resultado = "";
// //   for (let i = 0; i < numero; i++) {
// //     resultado += texto;
// //   }
// //   return resultado;
// // };
// // console.log(repiteme("bendiciones", 4));

// //function

// // String.prototype.repiteme = function (numero) {
// //   let resultado = "";
// //   for (let i = 0; i < numero; i++) {
// //     resultado += this;
// //   }
// //   return resultado;
// // };
// // console.log("kako".repiteme(5));
