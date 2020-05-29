var { documental1, documental2 } = require("./Documental");
var { pelicula1, pelicula2 } = require("./Pelicula");

class Cine {
  constructor(cadena, butacas, pantallas) {
    this.cadena = cadena;
    this.butacas = butacas;
    this.pantallas = pantallas;
  }

  reproducirLargometraje(largometraje) {
    if(largometraje.entrada == "$3") {
      return "Estás viendo el documental " + largometraje.titulo;
    } else {
      return "Estás viendo la película " + largometraje.titulo;
    }
  }
}

// Instancia de cine
var cine1 = new Cine("Cinepolis", 100, 8);

console.log(cine1.reproducirLargometraje(pelicula1));
console.log(cine1.reproducirLargometraje(documental1));
