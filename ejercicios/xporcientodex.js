//Cual es el x por ciento de x numero

const porcentaje = (numero, porcentaje) => {
  let result = (numero * porcentaje) / 100;
  return `El ${porcentaje}% de ${numero} es =  ${result} `;
};
console.log(porcentaje(80, 4));
