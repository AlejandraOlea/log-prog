const eliminaDuplicados = require("./ejercicio19");

test("Comprueba si funcion eliminaDuplicados esta definida", () => {
  expect(eliminaDuplicados).toBeDefined();
});
test("Fucion elminia dupliados y strings de un array dado", () => {
  expect(eliminaDuplicados([4, 5, 5, 5, "a"])).toStrictEqual([4, 5]);
});
