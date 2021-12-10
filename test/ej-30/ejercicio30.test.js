const arrDosElementos = require("./ejercicio30");

test("Comprobar si la funcion arrDosElementos esta definida", () => {
  expect(arrDosElementos).toBeDefined();
});
test("Return a new array ", () => {
  expect(arrDosElementos(["hola", "pio pio"])).toStrictEqual(["pio pio"]);
});
