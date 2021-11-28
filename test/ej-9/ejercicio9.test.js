const anagramas = require("./ejercicio9");

test("Comprobar si la funcion anagramas esta definida", () => {
  expect(anagramas).toBeDefined();
});

test("son anagramas", () => {
  expect(anagramas("sergio", "riesgo")).toBe(true);
});

test("son anagramas", () => {
  expect(anagramas("sergio", "alejandra")).toBe(false);
});
