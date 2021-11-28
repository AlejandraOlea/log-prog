const limpiarTexto = require("./ejercicio10");

test("Comprobar si funcion limpiar texto esta definida", () => {
  expect(limpiarTexto).toBeDefined();
});

test("limpia el texto", () => {
  expect(limpiarTexto("HOLA ")).toBe("ahlo");
});
