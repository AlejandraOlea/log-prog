const coche = {
  modelo: "Mercedes Clase A",
  maxima: 500,
  antiguedad: 2020,
  mostrarDatos() {
    console.log(this.modelo, this.maxima, this.antiguedad);
  },
  propiedad1: "valor aleatorio",
};

// console.log(coche.mostrarDatos());
document.write("<h1>" + coche.antiguedad + "</h1");
coche.mostrarDatos();
console.log(coche);

const saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "hola amiguitos";

    if (saludo) {
      resolve(saludo);
    } else {
      reject("no hay saludo");
    }
  }, 2000);
});

saludar
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
