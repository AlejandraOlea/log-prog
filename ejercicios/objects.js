const coche = {
  modelo: "Mercedes Clase A",
  maxima: 500,
  antiguedad: 2020,
  mostrarDatos() {
    console.log(this.modelo, this.maxima, this.antiguedad);
  },
  propiedad1: "valor aleatorio",
};

console.log(coche.mostrarDatos());
