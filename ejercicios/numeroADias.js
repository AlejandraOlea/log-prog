//Dado un numero mostrar a cuantos anios, meses y dias equivalen

const calcularDias = (numero) => {
  let anios = Math.floor(numero / 365);
  let restoAnios = numero % 365;
  let meses = Math.floor(restoAnios / 30);
  let dias = restoAnios % 30;

  return { anios, meses, dias };
};

console.log(calcularDias(920));
