/*
Autor:      Josué Hernández
Archivo:    operadoresAritmeticos.js
Fecha:      09DIC21
Objetivo:   Actividad 04 -> Algoritmos.
*/

/*
Operadores aritméticos:


+ -> Suma o concatenación
- -> Resta
* -> Multipicación
% -> Residuo o Módulo
/ -> División

*/

//Declaración de variables

const eNum1 = parseInt(prompt("Ingresa el número 1: "));
const eNum2 = parseInt(prompt("Ingresa el número 2: "));

// Operaciones aritméticas
const eSuma = eNum1 + eNum2;
const eResta = eNum1 - eNum2;
const eMulti = eNum1 * eNum2;
const eDivision = eNum1 / eNum2;
const eMod = eNum1 % eNum2;


//Impresión de resulados

console.log("El resultado de " + eNum1 + " + "+ eNum2 + " es:" + eSuma);
console.log("El resultado de " + eNum1 + " - "+ eNum2 + " es:" + eResta);
console.log("El resultado de " + eNum1 + " * "+ eNum2 + " es:" + eMulti);
console.log("El resultado de " + eNum1 + " / "+ eNum2 + " es:" + eDivision);
console.log("El residuo de " + eNum1 + " / "+ eNum2 + " es:" + eMod);