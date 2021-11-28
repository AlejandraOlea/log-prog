const capicua = require("./ejercico18");

test("Comprueba si la funcion capicua esta definida", () => {
  expect(capicua).toBeDefined();
});
test("Dado un numero comprobar si es capicua", () => {
  expect(capicua(121)).toBe(true);
});
