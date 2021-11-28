const eliminaDuplicados = (elementos) => {
  elementos = elementos.filter((elemento) => {
    return typeof elemento === "number";
  });
  let sinDuplicados = new Set(elementos);
  return Array.from(sinDuplicados);
};
module.exports = eliminaDuplicados;
