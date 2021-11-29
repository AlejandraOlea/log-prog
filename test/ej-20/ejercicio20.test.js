const angulo = require("./ejercicio20");

test("Comprobar que la funcion angulo esta definida", () => {
  expect(angulo).toBeDefined();
});

test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(60)).toBe("agudo");
});
test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(90)).toBe("recto");
});
test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(100)).toBe("obtuso");
});
test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(190)).toBe("concavo");
});
test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(180)).toBe("llano");
});
test("Dado un numero determinar que a que tipo de angulo corresponde", () => {
  expect(angulo(360)).toBe("completo");
});
