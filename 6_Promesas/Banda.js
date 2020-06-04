class Banda {
  // Método especial
  constructor(nombre, anio, website, genero) {
    this.nombre = nombre;
    this.anio = anio;
    this.website = website;
    this.genero = genero;
  }
}

// Exporto la clase como un objeto
module.exports = { Banda };

// console.log({ Banda });

// ------------------------------------------------------------------------------------------------

// Objeto Literal
// const BandaX = {
//   nombre: 'Nirvana',
//   anio: 1990,
//   website: 'www.nirvana.com',
//   genero: 'Rock'
// }

// console.log(BandaX);

// const nombre = BandaX.nombre;
// const anio = BandaX.anio;
// const website = BandaX.website;
// const genero = BandaX.genero;

// Destructuración de Objetos
// const { nombre, anio, website, genero } = BandaX;

// console.log(website);
// console.log(anio);
// console.log(nombre);
// console.log(genero);