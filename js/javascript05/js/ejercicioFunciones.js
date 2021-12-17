/*
Autor:      Josué Hernández
Archivo:    repaso.js
Fecha:      10DIC21
Objetivo:   Ejercicio actividad 04 -> Algoritmos
*/

/* 
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

*/

// Declaración funciones
function calcularDescuento(){
    
    let eValCompra = parseInt(prompt("Ingrese el valor de su compra para aplicar el descuento"));
    
    if (eValCompra < 100){
        return eValCompra * 0.90;
    } else if (eValCompra >= 100 && eValCompra < 200){
        return eValCompra * 0.80;
    } else { 
        return eValCompra * 0.70;
    }

}

//Principal
document.write("<h1>El precio con el descuento es " + calcularDescuento() + "</h1>");