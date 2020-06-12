// aray
const array = ['a', 'b', 'c'];

const resultado = array.map((elemento) => elemento + 'x');
console.log(resultado);

// -----------------------------------------------------------

// object
const object = {
  M9W94e8JbBd8VfzAEGj: {
    title: 'Hacer la cama',
    done: false
  },
  M9W94e8JbBd8VfzAEYj: {
    title: 'Hacer el desayuno',
    done: true
  },
  M9W9he8JbBd8VfzAEYj: {
    title: 'Hacer el desayuno',
    done: true
  },
}

const keysObject = Object.keys(object);
console.log(keysObject);

// console.log(object['M9W94e8JbBd8VfzAEGj']);

// [ 'M9W94e8JbBd8VfzAEGj', 'M9W94e8JbBd8VfzAEYj' ]
const lastArray = keysObject.map((id) => object[id]);
console.log(lastArray);