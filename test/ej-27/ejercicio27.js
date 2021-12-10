const masAltoMasBajo = (arr) => {
  let ordenado = arr.sort((a, b) => a - b);
  let first = ordenado[0];
  let last = ordenado[ordenado.length - 1];
  return { first, last };
};

module.exports = masAltoMasBajo;
