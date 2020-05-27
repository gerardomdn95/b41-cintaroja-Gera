// JSON
// JS => JavaScript
// O => Object
// N => Notation

// TODO COMO UN OBJETO

// Un objeto carece de orden en sus elementos
// Llaves
var perro = {
    // llave: valor
    // Atributos
    nombre: "Ayudante de Santa",
    edad: 31,
    color: "café",
    vive: true,
    juguetes: ["Pelota", "Hueso", "Peluche"],
    familia: {
        padre: "Homero",
        madre: "Marge",
        hermana: "Lisa",
        hermano: "Bart"
    },
    // Métodos
    juega: function () {
        return "El perro está jugando";
    },
    come: function (comida) {
        // String a minúscula .toLowerCase
        var comidaMinus = comida.toLowerCase();
        if (comidaMinus == "croquetas") {
            return "El perro está comiendo " + comidaMinus;
        } else {
            return comidaMinus + " no es comida para perros";
        }
    }
}

// ¿Cómo accedo a una propiedad?
console.log(perro);
console.log(perro.edad);
console.log(perro.nombre);
console.log(perro.juguetes[2]);
console.log(perro.familia.hermano);
console.log(perro.juega());
console.log(perro.come("CrOQuEtas"));

// --------------------------------------------------------

/* Arreglo
Un arreglo determina el orden de los elementos
Corchetes
                0           1           2        3 */
var paises = ["México", "Colombia", "Ecuador", "Perú"];
/* ¿Cómo accedo a una posición?
console.log(paises);
console.log(paises[1]);
console.log(paises[3]);
console.log(paises[4]); */


// Busquen a un ave famoso

// 5 características
// 2 métodos

// Mostrar en consola

// ave.edad = 3;
// ave.casa = "Playa"