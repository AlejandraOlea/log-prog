const repiteme = require("./ejercicio3");

test("Comprobar si la funcion repiteme esta definida", () =>
  expect(repiteme).toBeDefined());

test("Repite el texto n numero de veces", () =>
  expect(repiteme("hola", 3)).toEqual("holaholahola"));
