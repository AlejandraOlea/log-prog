//Dado un numero, mostrar un triangulo de asteriscos

const triangulo = (numero) => {
  let mitad = Math.floor(numero - 1);
  let resultado = "";

  //Bucle total filas
  for (let fila = 0; fila < numero; fila++) {
    let nivel = "";
    //Bucle para pintar asteriscos y espacios

    for (let columna = 0; columna < 2 * numero - 1; columna++) {
      if (mitad - fila <= columna && mitad + fila >= columna) {
        nivel += "*";
      } else {
        nivel += " ";
      }
    }
    resultado += nivel + "\n";
  }
  return resultado;
};
console.log(triangulo(3));
