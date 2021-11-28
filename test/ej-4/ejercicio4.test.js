const { expect } = require("@jest/globals");
const invertido = require("./ejercicio4");

test("Comprobar si la función invertido esta defeinida", () =>
  expect(invertido).toBeDefined());

test("123 to be 321", () => {
  expect(invertido(123)).toEqual("321");
});
