//Dado un array de numeros devolver el numero mas alto y el mas bajo

//mi solucion
// const masAltoMasBajo = (arr) => {
//   let ordenado = arr.sort((a, b) => a - b);
//   let first = ordenado[0];
//   let last = ordenado[ordenado.length - 1];
//   return { first, last };
// };
// console.log(masAltoMasBajo([23, 34, 63, 12, 54]));

//Solucion del curso
const masAltoMasBajo = (arr) => {
  let ordenados = arr.sort((a, b) => a - b);
  return {
    bajo: ordenados[0],
    alto: ordenados[ordenados.length - 1],
  };
};
console.log(masAltoMasBajo([23, 34, 63, 12, 54]));
