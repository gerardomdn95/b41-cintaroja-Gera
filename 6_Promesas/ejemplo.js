// Promesa
// * Algo que se va a cumplir en un futuro
// * Quizá no se puede cumplir

// Alba => 22 Junio
// Cumpleaños => 🥧 (Vamos a esperar a tu cumple)
// Tenemos que esperar hasta el día de cumple


// Maneras de ver una promesa

// La promesa está pendiente
// Faltan 20 días para tu cumple

// La promesa cumple
// Alba => 🥧

// La promesa no se cumple
// Alba => Explicación/Razón (No lo encontré, no estaba abierta la pastelería, no tenía dinero, ...)

const promesaCumple = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 100); // 0 -> 1

  setTimeout(() => {
    if (number > 50) {
      resolve('🥧');
    } else {
      reject("No pude entregarte tu pastel");
    }
  }, 3000);

});

// .then() cuando la promesa se cumple
// .catch() cuando la promesa NO se cumple

promesaCumple
  .then((pastel) => console.log(pastel))
  .catch((razon) => console.log(razon));

// console.log(Math.floor(Math.random() * 100));