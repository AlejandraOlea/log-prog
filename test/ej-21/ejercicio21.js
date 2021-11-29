const alCuadrado = (arr) => {
  return arr
    .filter((el) => typeof el === "number")
    .map((el) => {
      return Math.pow(el, 2);
    });
};

module.exports = alCuadrado;
