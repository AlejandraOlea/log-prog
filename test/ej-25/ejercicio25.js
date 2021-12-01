const ocurrencias = (input) => {
  let mapeo = {};
  let veces_repetido = 0;
  let elemento_repetido = "";

  if (typeof input === "string") {
    input = input.split(" ");
  }

  for (elemento of input) {
    if (mapeo[elemento]) {
      mapeo[elemento]++;
    } else {
      mapeo[elemento] = 1;
    }
  }
  for (elemento in mapeo) {
    if (mapeo[elemento] > veces_repetido) {
      veces_repetido = mapeo[elemento];
      elemento_repetido = elemento;
    }
  }
  return { veces_repetido, elemento_repetido };
};

module.exports = ocurrencias;
