const opeBasic = require("./ejercicio23");

test("Comprobar si la funcion opeBasic esta definida", () => {
  expect(opeBasic).toBeDefined();
});
test("Realizar las 4 operaciones basicas enre dos numeros dados", () => {
  expect(opeBasic(5, 5)).toStrictEqual([10, 0, 25, 1]);
});
