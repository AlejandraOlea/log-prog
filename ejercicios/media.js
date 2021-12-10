//Dado un array de numeros, sacar la media de todos ellos

//Solucion mia
// const media = (arr) => {
//   let result = 0;
//   for (number of arr) {
//     result += number;
//   }
//   return result / arr.length;
// };
// console.log(media([1, 2, 3]));

//Solucion del curso

// const laMedia = (arr) => {
//   let suma = arr.reduce((valorAcumulado, numeroActual) => {
//     return valorAcumulado + numeroActual;
//   });
//   return suma / arr.length;
// };
// console.log(laMedia([1, 2, 3]));

const laMedia = (arr) => {
  let suma = arr.reduce((a, b) => {
    return a + b;
  });
  return suma / arr.length;
};
console.log(laMedia([1, 2, 3]));
