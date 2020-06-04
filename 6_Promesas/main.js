// Llamamos a nuestra dependencia que se llama request
// request nos va a permitir hacer peticiones http
const request = require('request');

// Destructuración de mi objeto que se exportó de Banda.js
const { Banda } = require('./Banda');

// Declarando mi función, buscaBanda y recibe un parámetro o argumento (nombre)
const buscaBanda = (nombre) => {
  // Retorna una promesa
  return new Promise((resolve, reject) => {
    // URL => creamos nuestra constante endPoint y concatenamos el valor nombre
    const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
    // Ejecutamos request
    // request recibe como primer parámetro endPoint
    // callback function (error, response, body)
    // error => me va a indicar si existe un error
    // response => información de la petición (status code)
    // body => JSON que recibimos
    request(endPoint, (error, response, body) => {
      // Si no hay errores, continuamos
      if (error === null) {
        // Hacemos legible nuestro JSON para JS
        // Un string a objeto
        const respuesta = JSON.parse(body);
        // Instancia de mi clase Banda

        // Creo constantes basadas en los atributos del objeto => respuesta.artists[0]
        const { strArtist, intFormedYear, strWebsite, strGenre } = respuesta.artists[0];

        // Instancia de mi clase Banda que se encuentra en Banda.js
        const banda = new Banda(strArtist, intFormedYear, strWebsite, strGenre);

        // Resuelve la promesa
        resolve(banda);
      } else {
        reject('No encontré a la banda');
      }
    });
  });
}

buscaBanda('Nirvana')
  .then((banda) => console.log(banda))
  .catch((error) => console.log(error));
