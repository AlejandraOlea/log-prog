//Dado un numero devolver cuantos bucles tiene
//Numeros que tienen bucles: 0=1; 6=1; 8=2; 9=1;

//Solucion mia
// const bucles = (numero) => {
//   let contador = 0;
//   let bucle = numero.toString().split("");
//   if (bucle.includes("0")) {
//     contador += 1;
//   }
//   if (bucle.includes("8")) {
//     contador += 2;
//   }
//   if (bucle.includes("9")) {
//     contador += 1;
//   }
//   if (bucle.includes("6")) {
//     contador += 1;
//   }
//   return contador;
// };
// console.log(bucles(8069));

//Solucion del curso

const bucles = (numero) => {
  let arrayNumeros = numero.toString().split("");
  for (numero of arrayNumeros) {
    numero = parseInt(numero);
    console.log(numero);
  }
};
bucles(80);
