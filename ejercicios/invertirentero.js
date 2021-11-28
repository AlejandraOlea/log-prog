//Dado un numero entero, inviertelo y devuelve el nuevo entero.

const invertido = (number) => {
  return number.toString().split("").reverse().join("");
};
console.log(invertido(123));
