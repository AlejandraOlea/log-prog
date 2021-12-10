//Dado un array de objetos devolver cuales son las aficiones mas
//comunes de los usuarios

const usuarios = [
  { nombre: "Ale", aficiones: ["estudiar", "escalar", "viajar"] },
  { nombre: "Viky", aficiones: ["viajar", "escalar", "shopping"] },
  { nombre: "Nino", aficiones: ["instagram", "memes", "viajar"] },
];

const aficiones = (arrObj) => {
  let mapeo = {};
  for (let objeto of arrObj) {
    for (aficion of objeto.aficiones)
      if (!mapeo[aficion]) {
        mapeo[aficion] = 1;
      } else {
        mapeo[aficion]++;
      }
  }
  return mapeo;
};
console.log(aficiones(usuarios));
