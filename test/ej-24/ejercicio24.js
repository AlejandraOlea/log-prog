//Dado un array crear otro con el primer y el ultmimo elemento del array

//Resultado mio
// const primerYUltimo = (arr) => {
//   let firstAndLast = [];
//   firstAndLast.push(arr[0], arr.length - 1);
//   console.log(firstAndLast);
// };
// primerYUltimo([1, 2, 3, 4, 5, 6]);

//resultado del curso
const primerYUltimo = (arr) => {
  let firstAndLast = [];
  firstAndLast.push(arr[0], arr[arr.length - 1]);
  return firstAndLast;
};
module.exports = primerYUltimo;
