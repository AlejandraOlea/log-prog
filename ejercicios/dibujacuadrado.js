//dibujar un cuadrado hueco cons asteriscos

//lado de arriba y abajo
const lado = (number) => {
  let lado = "";
  for (let i = 0; i < number; i++) {
    lado += "*";
  }
  return lado;
};

//El cuadrado
const cuadrado = (number) => {
  //Almacenamos lado de arriba
  let dibujo = lado(number) + "\n";

  let contenido = "";
  //bucle principal que hace las filas
  for (let i = 2; i < number; i++) {
    contenido = "*";
    //contendio hueco
    for (let x = 2; x < number; x++) {
      contenido += " ";
    }
    contenido += "*";
    //añadir fila
    dibujo += contenido + "\n";
  }
  //lado abajo
  dibujo += lado(number);
  return dibujo;
};
console.log(cuadrado(10));
