const calcularDias = require("./ejercicio16");

test("Comprueba que la funcion calcularDias esta definida", () => {
  expect(calcularDias).toBeDefined();
});
test("Calcula a cuantos anios, meses y dias equivale un numero dado", () => {
  expect(calcularDias(920)).toStrictEqual({ anios: 2, meses: 6, dias: 10 });
});
