//Dado un input return the most repeated elements and times repeated.

// const ocurrencias = (input) => {
//   let mapeo = {};
//   let veces_repetido = 0;
//   let elemento_repetido = "";

//   if (typeof input === "string") {
//     input = input.split(" ");
//   }

//   for (elemento of input) {
//     if (mapeo[elemento]) {
//       mapeo[elemento]++;
//     } else {
//       mapeo[elemento] = 1;
//     }
//   }
//   for (elemento in mapeo) {
//     if (mapeo[elemento] > veces_repetido) {
//       veces_repetido = mapeo[elemento];
//       elemento_repetido = elemento;
//     }
//   }
//   return { veces_repetido, elemento_repetido };
// };
// console.log(ocurrencias("hola hola caracola"));
// console.log(ocurrencias([1, 2, 5, 5, 5, 5]));

//Dado un input return the most repeated elements and times repeated.

const repeated = (input) => {
  let mapeo = {};
  let elemento_mas_repetido = "";
  let numero_repeticiones = "0";

  if (typeof input === "string") {
    input.split("");
  }
  for (element of input) {
    if (mapeo[element]) {
      mapeo[element]++;
    }
    mapeo[element] = 1;
  }
  for (elemento in mapeo) {
    if (mapeo[elemento] > numero_repeticiones) {
      numero_repeticiones = mapeo[elemento];
      elemento_mas_repetido = elemento;
    }
  }
  return { numero_repeticiones, elemento_mas_repetido };
};
console.log(repeated([1, 2, 2, 2, 5]));
