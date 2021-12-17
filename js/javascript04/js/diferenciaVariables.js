/*
Autor:      Josué Hernández
Archivo:    diferenciaVariables.js
Fecha:      09DIC21
Objetivo:   Actividad 04 -> Algoritmos.
*/


//La declaración var se utilizaba anteriormente, son variables globales.

// Definición de Variables


//Con var,  cualquier parte del código existe
var eNumero = 27;

console.log(eNumero)

//Decisión if
if (true) {
    var eNumero = 50;
    console.log(eNumero);
}

console.log(eNumero);


//Con let, las variables se limitan a bloque de código donde se está declarando
var eNumero = 27;
var sTitulo = "Bootcamp Java";

console.log(sTitulo);
console.log(eNumero);

//Decisión if
if (true) {
    let sTitulo = "Cohorte 8"
    console.log(sTitulo)
    let eNumeroFav = 50;
    
}

console.log(eNumero);