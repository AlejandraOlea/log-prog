const divisor = require("./ejercicio8");

test("Comprobar si la funcion divisor esta definida", () => {
  expect(divisor).toBeDefined();
});

test("Comprobar si numero es divisor", () => {
  expect(divisor(5, 1)).toBe(1);
});

test("Comprobar si numero es divisor", () => {
  expect(divisor(5, 2)).toBe(false);
});
