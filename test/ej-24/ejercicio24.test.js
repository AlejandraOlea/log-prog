const primerYUltimo = require("./ejercicio24");

test("Comprobar si la funcion primerYUltimo esta definida", () => {
  expect(primerYUltimo).toBeDefinded;
});
test("Dado un array, crea uno nuevo con el primer y ultimo elemento", () => {
  expect(primerYUltimo([1, 2, 3, 4])).toStrictEqual([1, 4]);
});
