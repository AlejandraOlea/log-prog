//Dado un texto comprobar que sea un mail valido

const mailValido = (texto) => {
  return /^\w+@\w+\.\w+$/gi.test(texto);
};
console.log(mailValido("hola@gmail.com"));
