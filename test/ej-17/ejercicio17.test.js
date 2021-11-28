const factorial2 = require("./ejercico17");
test("Comprueba que la funcion factorial2 esa definida", () => {
  expect(factorial2).toBeDefined();
});
test("Devuelve el factorial de un numero", () => {
  expect(factorial2(3)).toBe(6);
});
