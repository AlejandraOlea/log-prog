//Hacer un reloj que en tiempo real muestre la hora en cada segundo

const reloj = require("../test/ej-22/ejercicio22");

// const reloj = () => {
//   setInterval(() => {
//     const fecha = new Date();
//     const horas = fecha.getHours();
//     const minutos = fecha.getMinutes();
//     const segundos = fecha.getSeconds();
//     console.log(`${horas}:${minutos}:${segundos}`);
//   }, 1000);
// };
// reloj();

class Reloj {
  constructor() {
    this.fecha = new Date();
    this.horas = this.fecha.getHours();
    this.minutos = this.fecha.getMinutes();
    this.segundos = this.fecha.getSeconds();
  }
  actualizar(segundos) {
    this.segundos += segundos;
    //Actualizar segundos
    if (this.segundos >= 60) {
      this.minutos++;
      this.segundos = 0;
    }
    //Actualizar minutos
    if (this.minutos >= 60) {
      this.horas++;
      this.mintuos = 0;
    }
    //Actualizar horas
    if (this.horas >= 24) {
      this.mintuos = 0;
    }
  }
  mostrar() {
    this.actualizar(1);
    console.log(`${this.horas} ${this.minutos} ${this.segundos}`);
  }
  encender() {
    setInterval(() => {
      this.mostrar();
    }, 1000);
  }
}
let myReloj = new Reloj();
myReloj.encender();
