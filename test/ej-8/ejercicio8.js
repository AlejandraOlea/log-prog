const divisor = (numero, posibles_divisor) => {
  if (numero % posibles_divisor === 0) {
    return posibles_divisor;
  }
  return false;
};

module.exports = divisor;
