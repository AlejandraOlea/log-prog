//Dado un array de alumnos devolver cuantos estan suspensos y cuantos estan aprobados

let alumnos = [
  ["a", 10],
  ["b", 20],
  ["c", 50],
  ["d", 70],
  ["d", 80],
];
//Mi resultado
// const resultadosAlumnos = (arr) => {
//   let result = "";
//   for (alumno of arr) {
//     if (alumno[1] >50) {
//       result = "aprobado";
//     } else {
//       result = "reprobado";
//     }
//     console.log(alumno[0], result);
//   }
// };
// resultadosAlumnos(alumnos);

//Resultado del curso

const resultadosAlumnos = (alumnos) => {
  let aprobados = 0,
    suspensos = 0;
  for (alumno of alumnos) {
    if (alumno[1] >= 50) {
      aprobados++;
    } else {
      suspensos++;
    }
  }
  return { aprobados, suspensos };
};
console.log(resultadosAlumnos(alumnos));
