const triangulo = require("./ejercicio28.js");

test("Comprueba que la funcion triangulo esta definida", () => {
  expect(triangulo).toBeDefined();
});

test("Given a number returs a triangle", () => {
  expect(triangulo(3)).toBe("  *   *** *****");
});
