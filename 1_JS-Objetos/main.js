console.log("Imprime otra cosa");

// Variable
// var edad = 24;
// console.log(typeof edad);
// console.log(edad);
// number

var nombre = "Gera";
console.log(typeof nombre);
console.log(nombre);
// string

var casado = false;
console.log(typeof casado);
console.log(casado);
// boolean

// Operadores lógicos
console.log("5 > 9");
console.log(5 > 9);

console.log("0 < 3");
console.log(0 < 3);

console.log("-3 >= -9");
console.log(-3 >= -9);

console.log("Gera == Juan");
console.log(nombre == "Juan");

if (nombre == "Gera") {
    console.log("La condición se cumple");
} else {
    console.log("La condición no se cumple");
}

function mayorDeEdad(edad) {
    if(edad >= 18) {
        // Concatenar
        console.log(edad + " eres mayor de edad");
    } else {
        console.log(edad + " no eres mayor de edad :(");
    }
}

mayorDeEdad(19);
mayorDeEdad(5);
mayorDeEdad(99);
mayorDeEdad(prompt("Escribe tu edad"));
