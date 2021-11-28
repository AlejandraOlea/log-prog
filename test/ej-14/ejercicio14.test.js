const mayoOminu = require("./ejercicio14");

test("Comprueba que la funcion mayOminu este definida", () => {
  expect(mayoOminu).toBeDefined();
});
test("Counts lower and uppercase letter in a string, return a string with the predominant type", () => {
  expect(mayoOminu("JAJAja")).toBe("JAJAJA");
});
test("Counts lower and uppercase letter in a string, return a string with the predominant type", () => {
  expect(mayoOminu("JAjaja")).toBe("jajaja");
});
