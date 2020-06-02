//             0,  1,  2,  3,  4
const array = [10, 21, 33, 46, 52];

// Imperativa => Iteramos nuestro arreglo por medio de un for
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Funcional de recorrer un arreglo
// forEach
array.forEach((valor) => console.log(valor));

// Map
// Generar un nuevo arreglo a partir de otro
array.map((a, b, c) => console.log(a, b, c));
// Generar un nuevo arreglo con su valor multiplicado por 2
const array2 = array.map((element, index) => `Índice ${index} ${element * 2}`);
console.log(array2);

// Filter
// Generar un nuevo arreglo que cumpla una condición
const arrayFilter = array.filter((element) => element % 2 === 0);
console.log(arrayFilter);

const countries = ["México", "Perú", "Colombia", "Costa Rica"];
// Utilizando filter me devuelvas los países con 5 caracteres o menos

const filteredCountries = countries.filter((country) => country.length <= 6);
console.log(filteredCountries);