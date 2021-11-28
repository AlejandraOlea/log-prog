//Dado un array de numeros, devolver el array sin elementos duplicados
//Si hay un string eliminarlo del array

//mi resultado
// const arrayLimpio = (arr) => {
//   let result = [];
//   for (el of arr) {
//     if (typeof el === "number") {
//       result.push(el);
//     }
//   }
//   result = new Set(result);
//   return result;
// };
// console.log(arrayLimpio([1, 2, 2, 2, 2, 3, 4, 5, "a"]));

//resultado curso

const eliminaDuplicados = (elementos) => {
  elementos = elementos.filter((elemento) => {
    return typeof elemento === "number";
  });
  let sinDuplicados = new Set(elementos);
  return Array.from(sinDuplicados);
};
console.log(eliminaDuplicados([4, 5, 5, 5, "a"]));
