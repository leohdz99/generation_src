/*
Autor:      Josué Hernández
Archivo:    condicionales.js
Fecha:      09DIC21
Objetivo:   Actividad 04 -> Algoritmos.
*/

/*
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



*/

/*
//Declaración de variables
let eEdad = 15;



if (eEdad >= 18){
    document.write("<h1>Eres mayor de edad, puedes votar</h1>"); // esta función es para escribir por HTML
} else {
    document.write("<h1>Eres menor de edad, no puedes votar</h1>");
}
*/


// Ejecicio: solicitar por prompt la edad del usuario

//Declaración de variables
let eEdad = parseInt(prompt("Ingresa tu edad" ));

//Código
if (eEdad >= 18 && eEdad < 30){
    document.write("<h1>Eres un Joven</h1>"); // esta función es para escribir por HTML
} else if(eEdad > 30 && eEdad < 60) {
    document.write("<h1>Eres un Adulto</h1>");
} else if ( eEdad > 60){
    document.write("<h1>Eres el abuelo de Batman</h1>");
} else {
    document.write("<h1>Eres un niño</h1>");
}