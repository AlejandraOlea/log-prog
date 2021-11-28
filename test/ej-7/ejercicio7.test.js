const buzzLight = require("./ejercicio7");

test("Comprobar si la funcion buzzLight esta definida", () => {
  expect(buzzLight).toBeDefined();
});

test("Reemplaza numeros multiplos de 3&5 por buzzligthyear", () => {
  expect(buzzLight(15)).toBe("buzzligthyear");
});
test("Reemplaza numeros multiplos 3 por palabra buzz", () => {
  expect(buzzLight(3)).toBe("buzz");
});
test("Reemplaza numeros multiplos 5 por palabra lightyear", () => {
  expect(buzzLight(5)).toBe("lightyear");
});
test("En otros los otros casos devuelve el numero", () => {
  expect(buzzLight(1)).toBe(1);
});
