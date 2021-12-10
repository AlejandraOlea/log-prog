//Dado un objeto, comprobar si existe una propiedad en concreto.
//Mi solucion
// const myobj = {
//   nombre: "ale",
//   edad: 58,
//   alive: true,
// };
// // const existePropiedad = (objeto, propiedad) => {
// //   for (key in objeto) return key === propiedad;
// // };
// // console.log(existePropiedad(myobj, "nombre"));

// //Solucion del curso
// const existePropiedad = (objeto, propiedad) => {
//   if (
//     typeof objeto === "object" &&
//     typeof propiedad === "string" &&
//     objeto.hasOwnProperty(propiedad)
//   ) {
//     return true;
//   }
//   return false;
// };
// console.log(existePropiedad({ nombre: "wiwi" }));
