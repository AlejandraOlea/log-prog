//Dado un array de numeros devolver el array con sus numeros elevados al cuadrado
//el array debe eliminiar cualqueir contenido que no sea numerico

//Solucion mia
const alCuadrado = (arr) => {
  return arr
    .filter((el) => typeof el === "number")
    .map((el) => {
      return Math.pow(el, 2);
    });
};
console.log(alCuadrado([1, 2, 3, 4, "a"]));

//Solucion del curso

// const square = (numeros) => {
//   let squareNumbers = numeros
//     .filter((numero) => typeof numero === "number")
//     .map((n) => Math.pow(n, 2));
//   return squareNumbers;
// };
// console.log(square([2, 3, 4, 5, 6, "hola"]));
