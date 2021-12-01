const mailValido = require("./ejercicio26");

test("Comprueba que la funcion mailValido esta definida", () => {
  expect(mailValido).toBeDefined();
});

test("Funcion valida mail", () => {
  expect(mailValido("hola@gmail.com")).toBe(true);
});
