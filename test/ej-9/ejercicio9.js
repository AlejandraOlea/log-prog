const anagramas = (string1, string2) => {
  let texto1 = string1.split("").sort().join("");
  let texto2 = string2.split("").sort().join("");
  if (texto1 === texto2) {
    return true;
  }
  return false;
};

module.exports = anagramas;
