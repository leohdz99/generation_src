/*
Autor:      Josué Hernández
Archivo:    main.js
Fecha:      07DIC21
Objetivo:   Probar VSC y como funciona JS (sintaxis)
*/

// alert("Hola Mundo"); // Manda alerta en pop up en el navegador con el texto indicado


// String
let sNombre = "Josué Hernández";

console.log(sNombre);

// Number
let eNum1 = 10; 
let eNum2 = 10.005; 
let eNum3 = -50;
let eNum4 = eNum3;

console.log(eNum1, eNum2, eNum3, eNum4);

// Concatenación
console.log("El valor del número 1 es: " + eNum1);
console.log("El valor del número 2 es: " + eNum2);
console.log("El valor del número 3 es: " + eNum3);
console.log("El valor del número 4 es: " + eNum4);

//Boolean

let bBooleano1 = true;
let bBooleano2 = false;

console.log("El el valor del booleano 1 es: " + bBooleano1);
console.log("El el valor del booleano 2 es: " + bBooleano2);


// null <- Espacio de memoria vacio

let vNulo = null;

console.log("El valor de la variable Nula es: " + vNulo)

// undefined <- Vacia (cuando no se pone asiganción a la variable )

let vIndefinida;

console.log("El valor de la variable vIndefinida es: " + vIndefinida);

// Prueba de tipado débil

let vVariable;

console.log("El valor de la variable vVariable es: " + vVariable);

vVariable = "Hola Mundo";

console.log("El valor de la variable vVariable es: " + vVariable);

/*
Variable: Espacio de memoria que va cambiando durante la ejecucion del programa

var nombre = "Pedro";

Palabra reservada -> Nombre de variable -> Operador de asgnación -> Valor

Tipos de datos

- String
- Number
- Boolean
- null
- undefined

Definición de variables:

- let
- var

Definición constantes:

- const

JS es un lenguaje de tipado débil


*/ 