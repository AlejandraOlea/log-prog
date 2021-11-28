const recortado = require("./ejercicio11");

test("Comprobar que la funcion recortado esta definida", () => {
  expect(recortado).toBeDefined();
});

test("Recortar x de string", () => {
  expect(recortado("hola", 2)).toBe("ho");
});
test("Validar input", () => {
  expect(recortado("hola", "h")).toBe("introduce bien los datos!");
});
