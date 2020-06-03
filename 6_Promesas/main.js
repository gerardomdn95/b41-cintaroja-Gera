const request = require('request');
const { Banda } = require('./Banda');

const buscaBanda = (nombre) => {
  // Retorna una promesa
  return new Promise((resolve, reject) => {
    // URL
    const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
    // Ejecutamos request
    request(endPoint, (error, response, body) => {
      if (error === null) {
        // console.log('Encontré a la banda');
        // console.log(body);
        // Hacemos legible nuestro JSON
        const respuesta = JSON.parse(body);
        const banda = new Banda(
          respuesta.artists[0].strArtist,
          respuesta.artists[0].intFormedYear,
          respuesta.artists[0].strWebsite,
          respuesta.artists[0].strGenre
        )
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
