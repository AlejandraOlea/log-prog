class Coche {
  constructor(modelo, velocidad, antiguedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }
  aumentarVelocidad() {
    this.velocidad += 1;
  }
  reducirVelocidad() {
    this.velocidad += 1;
  }
}
//Herencia: sirve para traerse las cualidades de una clase padre a una clase hija
class Autobus extends Coche {
  constructor(modelo, velocidad, antiguedad) {
    super(modelo, velocidad, antiguedad);
    this.altura = 5;
  }
  mostrarAltura() {
    return "La altura del bus es; " + this.altura;
  }
}
let autobus1 = new Autobus("PEGASUS", 200, 2017);
console.log(autobus1.mostrarAltura());
let coche1 = new Coche("BMW", 200, 2017);
let coche2 = new Coche("AUDI", 100, 2018);
let coche3 = new Coche("MERCEDES", 250, 2021);
let coche4 = new Coche("RENAULT", 200, 2017);

console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);
