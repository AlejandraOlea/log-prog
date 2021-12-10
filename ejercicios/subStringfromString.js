//Dado un string, devolver todos los posibles substrings

// const substrFromSt = (palabra) => {
//   let subStr = [];

//   for (letra in palabra) {
//     let comienzo = parseInt(letra);
//     for (let i = 0; i <= palabra.length - comienzo; i++) {
//       let final = parseInt(i) + parseInt(comienzo);
//       //   console.log(comienzo, final);
//       subStr.push(palabra.substring(comienzo, final));
//     }
//   }
//   return subStr.filter((el) => el.length >= 1);
// };

// console.log(substrFromSt("hola"));

const subTring2 = (palabra) => {
  let subStr = [];
  for (let i = 0; i <= palabra.length; i++) {
    let comienzo = i;
    // console.log(palabra[i]);
    console.log(comienzo);
  }
};
subTring2("hola");
