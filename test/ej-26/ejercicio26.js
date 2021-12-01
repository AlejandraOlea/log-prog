const mailValido = (texto) => {
  return /^\w+@\w+\.\w+$/gi.test(texto);
};

module.exports = mailValido;
