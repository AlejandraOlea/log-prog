const reloj = () => {
  setInterval(() => {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    console.log(`${horas}:${minutos}:${segundos}`);
  }, 1000);
};

module.exports = reloj;
