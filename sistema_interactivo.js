// ============================================================
// TASK 1 - Configuración inicial del proyecto
// Archivo: sistema_interactivo.js
// Descripción: Programa interactivo que solicita nombre y edad
// al usuario, valida la entrada y muestra mensajes dinámicos.
// Compatible con navegador (usa prompt/alert) y Node.js.
// ============================================================


// ============================================================
// TASK 2 - Entrada de datos del usuario
// Se solicita el nombre y la edad mediante prompt().
// Se usan 'let' y 'const' según si el valor puede cambiar o no.
// ============================================================

// Se usa const porque el nombre no cambia después de ingresarlo
const nombre = prompt("Por favor, ingresa tu nombre:");

// Se usa let porque la edad se convertirá a número más adelante
let edadTexto = prompt("Por favor, ingresa tu edad:");


// ============================================================
// TASK 3 - Validación de la edad
// Se convierte el texto ingresado a número y se verifica
// que sea un valor numérico válido usando isNaN().
// ============================================================

// Convertimos el texto ingresado a un número entero
const edad = parseInt(edadTexto);

// isNaN() retorna true si el valor NO es un número válido
if (isNaN(edad)) {
  console.error("Error: Por favor, ingresa una edad válida en números.");

} else {

  // ============================================================
  // TASK 4 - Condicionales y mensajes dinámicos
  // Según la edad ingresada, se muestra un mensaje personalizado
  // usando tanto alert() (navegador) como console.log() (Node.js).
  // ============================================================

  if (edad < 18) {
    // Mensaje para menores de 18 años
    const mensajeMenor = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    alert(mensajeMenor);
    console.log(mensajeMenor);

  } else {
    // Mensaje para mayores o iguales a 18 años
    const mensajeMayor = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    alert(mensajeMayor);
    console.log(mensajeMayor);
  }
}