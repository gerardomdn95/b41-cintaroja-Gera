// PascalCase => Clases
// cammelCase => variables, funciones, métodos, atributos

// Super Clase o Clase Padre
class Mascota {
  // TODAS LAS CLASES LO TIENEN
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.cerebro = true;
    this.patas = patas;
  }

  alimentarse() {
    return this.nombre + " se está alimentando.";
  }
}

// Perro => subclase de Macota
class Perro extends Mascota {
  constructor(nombre, patas, ladra, cola) {
    // Ejecuta constructor de la clase padre
    super(nombre, patas);
    this.ladra = ladra;
    this.cola = cola;
  }

  truco() {
    return this.nombre + " está haciendo un truco."
  }
}

var perro1 = new Perro("Alfonso", 4, true, false);
console.log(perro1);
console.log(perro1.alimentarse());
console.log(perro1.truco());

// Serpiente
class Serpiente extends Mascota {
  constructor(nombre, patas, color) {
    super(nombre, patas);
    this.color = color;
    this.venenosa = false;
  }

  enrroscarse() {
    return this.nombre + " se está enrroscando."
  }
}

var serpiente1 = new Serpiente("Boa", 0, "Café");
console.log(serpiente1);
console.log(serpiente1.alimentarse());
console.log(serpiente1.enrroscarse());