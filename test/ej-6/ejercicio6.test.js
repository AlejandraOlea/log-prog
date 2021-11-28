// const { TestWatcher } = require("@jest/core");
const cuentaVocales = require("./ejercicio6");

test("Comprobar si la función cuentaVocales esta definida", () =>
  expect(cuentaVocales).toBeDefined());

test("Cuenta las vocales de un texto", () => {
  expect(cuentaVocales("abc")).toEqual(1);
});

test("Cuenta las vocales de un texto", () => {
  expect(cuentaVocales("bcd")).toEqual(0);
});
