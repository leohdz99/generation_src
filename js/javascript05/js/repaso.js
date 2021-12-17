/*
Autor:      Josué Hernández
Archivo:    repaso.js
Fecha:      10DIC21
Objetivo:   Repaso de la actividad 04 -> Algoritmos
*/

/* 
----- Condicionales -----

Los condicionales se utilizan para tomar decisiones dentro de nuestro programa

--- Decision sí:
if(condicion){
    Si es verdadera la condición, se ejecutará lo que está dentro del bloque if
}

--- Decisión sí - de lo contrario:
if(condicion){
    Si es verdadera la condición, se ejecutará lo que está dentro del bloque if
} else {
    Si es falsa, ejecuta lo que esta en este bloque de código
}

----- Funciones -----

Nos sirven para escribir códigos que se pueden reutilizar (patrón de código). 

--- Sintaxis:

function nombreFuncion (parametros) {
    //Código de la función
    //Valor de retorno
}

Si existe la sobreescritura de métodos, pero en casos muy específicos.
El nombre preferentemente debe de describir lo que realiza la función.

*/

// Declaración de Funciones
function procesadorFrutas(manzanas, naranjas){
    let jugo = "<h1>He preparado este rico jugo de " + manzanas + " manzanas y " +
    naranjas + " naranjas</h1>";
    return jugo;
    
}

// Principal
let jugoManzana = procesadorFrutas(4, 0);
document.write(jugoManzana);

let jugoNaranja = procesadorFrutas(0, 5);
document.write(jugoNaranja);


