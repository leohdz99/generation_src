/*
Autor:      Josué Hernández
Archivo:    ciclos.js
Fecha:      13DIC21
Objetivo:   Actividad 06 -> Algoritmos III
*/

/* 
Ciclos - Bucles - Loops

Son estructuras de control, las cuales son una secuencia de instrucciones de código que se ejecuta repetidas veces


while
do - while
for
*/

/* While ---- Estructura ---- Pre-condicional 

// Mientras el condicional siga siendo verdadero, seguirá ejecutando.

while(condicional){
    // Código TODO
    // Modificación al valor condicional (Para evitar caer en bucles infinitos).
}
*/

console.log("-- Ciclo While");

// Ciclo While
let eCondicional = 1;
while (eCondicional <= 10) {
    console.log(eCondicional);
    // eCondicional += 1;
    eCondicional ++;
}

console.log("-- Operadores binarios");

// Operadores binarios postfijo
let eNum = 1;
console.log(eNum);

// Incremento
eNum ++;
console.log(eNum);

eNum ++;
console.log(eNum);

eNum ++;
console.log(eNum);

// Decremento
eNum --;
console.log(eNum);

eNum --;
console.log(eNum);

eNum --;
console.log(eNum);


/* Do/while ---- Estructura ---- post-condicional 

do { 
   // Código TODO
    // Modificación al valor condicional (Para evitar caer en bucles infinitos).
} while (condicional);
*/

console.log("-- Ciclo Do-While");
//Ciclo do-while
let eNum2 = 1;

do { 
    console.log(eNum2);
    eNum2 ++;
} while (eNum2 <= 10);


//Comparación while / do-while

console.log("-- Comparación while / do-while");
// ---------------------------------------------------
console.log("---- Ciclo While ----");
eCondicional = 11;
while (eCondicional <= 10) {
    console.log("Dentro del while:" + eCondicional);
    // eCondicional += 1;
    eCondicional ++;
}
console.log("Fuera del while:" + eCondicional);
// ---------------------------------------------------
console.log("---- Ciclo Do-While ----");
eCondicional = 11;
do { 
    console.log("Dentro del Do-While: " + eNum2);
    eNum2 ++;
} while (eNum2 <= 10);

console.log("Fuera del Do-While: " + eNum2);



/* For ---- Estructura ----- Ciclo con iteraciones definidas

// Index es la variable de control y es una variable temporal
// Se puede sustituir el array.length por un número entero

for (let index = 0; index < array.length; index++) {
   // Código TODO    
}

*/

console.log("-- Ciclo For");

//Ciclo For
for (let i = 1; i <= 10; i++) {
    
    console.log("hola: " + i);
    
}
// ------------------------------------------------------
console.log("-- Ciclos y Arreglos");

let aComida = ["Pozole", "Tacos", "Tamales", "Tortas"];

for (let i = 0; i < aComida.length; i++){
     
    console.log("El día de hoy comí " + aComida[i]);

}

