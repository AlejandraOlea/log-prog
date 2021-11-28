//Dado un numero mostrar la serie de Fibonacci (y el resultado de la serie(el ultimo numero))
//Nº Fibonacci es un orden de numeros donde cada numero es la suma de los dos anteriores

const fibonacci = (numero) => {
  let serie = [0, 1];

  for (let i = 2; i <= numero; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return [serie, serie[numero]];
};
console.log("Serie COmpleta", fibonacci(3)[0]);
console.log("Serie COmpleta", fibonacci(3)[1]);

// 011235;
