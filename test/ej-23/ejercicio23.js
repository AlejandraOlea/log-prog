const opeBasic = (number1, number2) => {
  let suma = number1 + number2;
  let resta = number1 - number2;
  let multiplica = number1 * number2;
  let divide = number1 / number2;
  return [suma, resta, multiplica, divide];
};

module.exports = opeBasic;
