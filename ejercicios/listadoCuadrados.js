//Dado un numero mostrar listado de los cuadrados de todos los numeros naturales
//hasta llegar al mismo.

//mi solucion
// const square = (number) => {
//   let square = [];
//   for (let i = 0; i <= number; i++) {
//     square += i * i + " \n";
//   }
//   return square;
// };
// console.log(square(20));

//otra solucion
// const square1 = (number) => {
//   let square = [];
//   for (let i = 0; i <= number; i++) {
//     square += i * i + "\n";
//   }
//   return square;
// };
// // console.log(square1(20));

// const print = (number) => {
//   let result = `${square1(number)} `;
//   return result;
// };
// console.log(print(4));

//solucion del curso

const square2 = (number) => {
  return number * number;
};

const print1 = (number) => {
  for (let i = 0; i <= number; i++) {
    console.log(square2(i));
  }
};

console.log(print1(4));
