const pali = require("./ejercicio2");

test("Comprobar si la funcion pali esta definida", () =>
  expect(pali).toBeDefined());

test("Es un palindromo", () => {
  expect(pali("otto")).toEqual(true);
});

test("No es un palindromo", () => {
  expect(pali("paciencia")).toBe(false);
});
