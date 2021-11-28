const aMayuscula = require("./ejercicio12");

test("Comprobar que la funcion aMayuscula esta definida", () => {
  expect(aMayuscula).toBeDefined();
});

test("Capitalize every first word in a sentence", () => {
  expect(aMayuscula("ja ja")).toBe("Ja Ja");
});
