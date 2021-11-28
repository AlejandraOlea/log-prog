//Dada una palabra, buscarla en una frase y devolver cuantas veces aparece
//includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto

let frase = "HOLa, hola, caracola.";
let palabra = "hola";

const busquedaPalabra = (frase, busqueda) => {
  //Primero limpiar el input
  let texto_limpio = frase.toLowerCase().replace(/[,.!¡-]/gi, "");
  // console.log(texto_limpio);
  //ver si la frase contiene la palabra
  let resultado = 0;
  let incluido = texto_limpio.includes(busqueda) ? true : false;
  if (incluido) {
    let palabras = texto_limpio.split(" ");
    // console.log(palabras);
    let mapeo = {};
    for (palabra of palabras) {
      if (mapeo[palabra]) {
        mapeo[palabra]++;
      } else {
        mapeo[palabra] = 1;
      }
    }
    resultado = mapeo[busqueda];
    return `"${busqueda}" esta ${resultado} veces repetida!`;
  }
};

console.log(busquedaPalabra(frase, palabra));

// const buscaPalabra = (frase, busqueda) => {
//   let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
//   let resultado = 0;
//   if (texto_limpio.includes(busqueda)) {
//     let palabras = texto_limpio.split(" ");
//     let mapa = {};
//     for (let palabra of palabras) {
//       if (mapa[palabra]) {
//         mapa[palabra]++;
//       } else {
//         mapa[palabra] = 1;
//       }
//     }
//     resultado = mapa[busqueda];
//     // console.log(palabras);
//     // console.log(mapa);
//   } else {
//     resultado = 0;
//   }
//   return resultado;
// };
// console.log(buscaPalabra(frase, "hola"));
