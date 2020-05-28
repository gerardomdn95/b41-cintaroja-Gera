// var platillo = {
//     nombre: "Hamburguesa",
//     ingredientes: ["Carne", "Queso", "Mayonesa", "Mostaza"],
//     tamanio: "Doble",
//     conTocino: true
// }

// console.log(platillo.nombre);

// Primera letra mayúscula y singular
class Auto {
    // MÉTODO ESPECIAL => TODAS LAS CLASES
    // Primero en ejecutarse 
    constructor(color, motor, matricula) {
        this.color = color;
        this.motor = motor;
        this.llantas = 4;
        this.matricula = matricula;
        this.volante = true;
    }

    // Método
    encender() {
        return "El auto " + this.color + " ha sido encendido y tiene un motor " + this.motor;
    }

    cerrar() {
        return "El auto " + this.color + " ha sido cerrado"; 
    }

    // Setters
    cambiarMotor(nuevoMotor) {
        this.motor = nuevoMotor;
        return "Se ha cambiado el motor";
    }

    pintarAuto(nuevoColor) {
        this.color = nuevoColor;
        return "Se ha pintado el auto"; 
    }

    // Getter
    obtenResumen() {
        if (this.motor == "Eléctrico") {
            return "Este auto es de color " + this.color + ", tiene " + this.llantas + " llantas y su matrícula es " + this.matricula + " es un auto eléctrico y no usa gasolina.";
        } else {
            return "Este auto es de color " + this.color + ", tiene " + this.llantas + " llantas y su matrícula es " + this.matricula;
        }
    }
}

// Instancia de mi clase
var miAuto = new Auto("Plata", "V4", "GSJHDSJ7");
// var autoDos = new Auto("Rojo", "V6", "BCD32BHJ");
// var autoTres = new Auto("Negro", "Eléctrico", "BCF3SAHJ");

// console.log(miAuto);
// console.log(autoDos);
// console.log(autoTres);

// console.log(miAuto.encender());
// console.log(autoDos.encender());
// console.log(autoTres.encender());

// console.log(miAuto.cerrar());

// console.log(miAuto.cambiarMotor("Eléctrico"));
console.log(miAuto.pintarAuto("Púrpura"));
console.log(miAuto.obtenResumen());

// Este auto es de color Púrpura, tiene 4 llantas y su matrícula es GSJHDSJ7


/* Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, género, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
     El constructor pide nombre, edad, género, peso y altura
*/

/* 
Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
*/