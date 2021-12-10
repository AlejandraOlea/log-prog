const masAltoMasBajo = require("./ejercicio27");

test("Check if function masAltoMasBajo is defined", () => {
  expect(masAltoMasBajo).toBeDefined();
});
test("Retuns the lowest and higher values of a given array of numbers", () => {
  expect(masAltoMasBajo([23, 34, 63, 12, 54])).toStrictEqual({
    first: 12,
    last: 63,
  });
});
