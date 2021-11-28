const pali = (texto) => {
  let pali = texto.split("").reverse().join("");
  return pali === texto;
};

module.exports = pali;
