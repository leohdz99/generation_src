/*
Autor:      Josué Hernández
Archivo:    funciones.js
Fecha:      09DIC21
Objetivo:   Actividad 04 -> Algoritmos.
*/

/*
Funciones

Nos sirven para escribir códigos que se pueden reutilizar (patrón de código). 

----- Sintaxis:

function nombreFuncion (parametros) {
    //Código de la función
    //Valor de retorno
}

Si existe la sobreescritura de métodos, pero en casos muy específicos.

*/

//Declaración de Funciones
/*
function sumar(){
    // declaración de variables
    let eNum1 = 10;
    let eNum2 = 20;
    let eSuma = eNum1 + eNum2;
    //Impresión de valores
    document.write("<h1>El resultado de la suma es: " + eSuma + "</h1>");
}
*/

function sumar(eNum1, eNum2){
    document.write("<h1>El resultado de la suma es: " + (eNum1 + eNum2) + "</h1>");
}

//Código Principal
sumar(98, 52);
sumar(99, 99);







