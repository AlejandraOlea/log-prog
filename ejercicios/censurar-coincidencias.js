//Dado un texto y una busqueda censurar todas las coincidencias de la busqueda con [CENSURADO]

const censurado = (texto, busqueda) => {
  if (!texto || !busqueda) {
    return "No has ingresado texto y/o busqueda";
  }
  return texto.replace(new RegExp(busqueda, "gi"), "[CENSURADO]");
};
console.log(censurado("hola78 como holacaracola estan hola todos"));
