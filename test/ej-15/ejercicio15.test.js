const fibonacci = require("./ejercicio15");

test("Comprueba que la funcion fibonacci este definida", () => {
  expect(fibonacci).toBeDefined();
});

test("Dado un numero muestra la serie Fibonacci", () => {
  expect(fibonacci(3)).toStrictEqual([0, 1, 1, 2]);
});
