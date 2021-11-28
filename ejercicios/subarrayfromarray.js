//Dado array dividirlo en x subarrays

// let arr = ["oso", "perro", "gato", "tigre", "chancho"];

// const divideArray = (arreglo_principal, numero_elementos) => {
//   let arreglos = [];
//   for (let elemento of arreglo_principal) {
//     let ultimo = arreglos[arreglos.length - 1];
//     if (!ultimo || ultimo.length === numero_elementos) {
//       arreglos.push([elemento]);
//     } else {
//       ultimo.push(elemento);
//     }
//     console.log(arreglos);
//   }
// };
// divideArray([7, 8, 9, 10, 15], 2);
// divideArray(arr, 2);

//Dado un array subdivirlo en x subarrays.

const divideArray = (arreglo_principal, numero_elementos) => {
  let arreglo = [];
  for (elemento of arreglo_principal) {
    let ultimo = arreglo[arreglo.length - 1];
    if (!ultimo || ultimo.length === numero_elementos) {
      arreglo.push([elemento]);
    } else {
      ultimo.push(elemento);
    }
  }
  return arreglo;
};
// console.log(divideArray([8, 9, 7, 6, 5, 4, 3, 6], 3));
console.log(
  divideArray(["oso", "perro", "chancho", "camello", "panda", "jirafa"], 3)
);
