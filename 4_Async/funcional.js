// for me imprima 1 - 100
// los pares

// for (var i = 1; i <= 100; i++) {
//   if(i % 2 == 0) {
//     console.log(i);
//   }
// }

// ES6 => "JS Moderno" (Async, callbacks)
// Adquirir nuevos hábitos
// const pi = 3.1416;
// console.log(pi);

// let edad = 24;
// console.log(edad);
// edad = 25;
// console.log(edad);

// // Arrow Functions
// const myFunction = () =>
//   "Hola esta es mi función";

// // function suma(a, b) {
// //   return a + b;
// // }

// const suma = (a, b) => a + b;

// console.log(suma(3, 5));

// console.log(myFunction());

const paises = ["México", "Perú", "Colombia"];

// Imperativa
// for(let i = 0; i < array.length; i++ ) {
//   console.log(array[i]);
// }

// Unicamente arreglo
paises.forEach((pais) => console.log(pais));

// Map => a generar un nuevo arreglo

// [ "País 0: México", "País 1: Perú", "País 2: Colombia" ]

// String template
const newArray = paises.map((elemento, indice, arregloCompleto) => `País ${indice}: ${elemento}`);
console.log(newArray);