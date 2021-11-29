const alCuadrado = require("./ejercicio21");

test("Comprobar que la funcion alCuadrado este definida", () => {
  expect(alCuadrado).toBeDefined();
});

test("Devuelve numeros de un array al cuadrado", () => {
  expect(alCuadrado([1, 2, 4])).toStrictEqual([1, 4, 16]);
});
