const ocurrencias = require("./ejercicio25.js");

test("Comprueba si la funcion ocurrencias esta definida", () => {
  expect(ocurrencias).toBeDefined();
});
test("Dado un input, return elemento mas repetida y veces que esta repetido", () => {
  expect(ocurrencias("hola hola caracola")).toStrictEqual({
    veces_repetido: 2,
    elemento_repetido: "hola",
  });
});
