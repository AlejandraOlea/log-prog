//Dada una cadena de texto devolver el caracter mas usado

/* Parte 1 MAPEO DE LAS LETRAS*/
// const masUsado = (texto) => {
//   let mapeoLetras = {};
//   for (letra of texto) {
//     if (!mapeoLetras[letra]) {
//       mapeoLetras[letra] = 1;
//     } else {
//       mapeoLetras[letra]++;
//     }
//   }
//   console.log(mapeoLetras);
// };

// masUsado("aaaeeii o u ");

/* Parte 2 DEVOLVER EL CARACTER MAS USADO*/
const masUsado = (texto) => {
  let mapeoLetras = {};
  let maximo = 0;
  let letra_mas_repetida = "";

  for (letra of texto) {
    if (!mapeoLetras[letra]) {
      mapeoLetras[letra] = 1;
    } else {
      mapeoLetras[letra]++;
    }
  }
  for (letra in mapeoLetras) {
    console.log("Mapeo", letra, mapeoLetras[letra]);
    if (mapeoLetras[letra] > maximo) {
      maximo = mapeoLetras[letra];
      letra_mas_repetida = letra;
    }
  }
  console.log("Total", maximo, letra_mas_repetida);
};

masUsado("aaaeeii o u ");
