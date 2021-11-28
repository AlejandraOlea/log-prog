//Dado un array de objetos de peliculas(titulo, director, vista)
//mostrar todas las peliculas inidcando cuales has visto y cual no

const coleccion_peliculas = [
  { titulo: "Gone width the wind", director: "Not idea", vista: true },
  { titulo: "Lord of the Rings", director: "Who knows", vista: true },
  { titulo: "The Avengers", director: "Not idea", vista: false },
  { titulo: "Wason", director: "Not idea", vista: false },
];
//mi solucion
// const misPeliculas = (arrObj) => {
//   let peliVista = `Ya viste \n`;
//   let peliNovista = ["No has visto"];
//   for (peli of arrObj) {
//     if (peli.vista) {
//       (peliVista += peli.titulo), peli.director;
//     } else {
//       (peliNovista += peli.titulo), peli.director;
//     }
//   }
//   console.log(peliNovista, peliVista);
// };
// misPeliculas(coleccion_peliculas);

//Solucion del curso

const mispeliculas2 = (pelicula) => {
  for (p of pelicula) {
    let paraMostrar = `${p.titulo} del director: ${p.director}`;
    if (p.vista) {
      console.log("Ya has visto", paraMostrar);
    } else {
      console.log("Aun no has visto", paraMostrar);
    }
  }
  return pelicula;
};
mispeliculas2(coleccion_peliculas);
