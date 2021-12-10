//Dados dos n umeros, sacar un numero aleatorio entre ellos

//Solución del curso

const aleatorio2 = (minimo, maximo) => {
  return Math.round(Math.random() * (maximo - minimo) + minimo);
};
console.log(aleatorio2(1, 5));
