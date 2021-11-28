const divisor = (numero, posibles_divisor) => {
  if (numero % posibles_divisor === 0) {
    return posibles_divisor;
  }
  return false;
};
// console.log(divisor(4, 1));

const print = (numero) => {
  let esDivisor = [];
  for (let i = 1; i <= numero; i++) {
    if (divisor(numero, i)) {
      esDivisor.push(i);
    }
  }
  return esDivisor;
};

module.exports = print;
