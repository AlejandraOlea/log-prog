const laMedia = require("./ejercicio29");

test("Comprueba que la function laMedia esta definida", () => {
  expect(laMedia).toBeDefined();
});
test("Return la media de un array de numeros", () => {
  expect(laMedia([1, 2, 3])).toBe(2);
});
