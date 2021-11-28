const permutacion = require("./ejercicio13");

test("Function permutation is defined", () => {
  expect(permutacion).toBeDefined();
});
test("Return true if the given array is permutacion of a given numer", () => {
  expect(permutacion([1, 2, 3, 4, 5], 5)).toBe(true);
});
test("Return true if the given array is permutacion of a given numer", () => {
  expect(permutacion([1, 2, 4, 5], 5)).toBe(false);
});
