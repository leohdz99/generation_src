/*
Autor:      Josué Hernández
Archivo:    arreglos.js
Fecha:      10DIC21
Objetivo:   Ejercicio actividad 05 -> Algoritmos II
*/

/*
Arreglos

Colección de elementos, Tienen métodos o funciones que nos permiten ordennar y/o manipular los datos almacenados

--- Sintaxis

const aArreglo = [];

--- Arreglo de arreglo

const aArregloArr = [[]]

Se pueden almacenar diferente tipos de datos, no es necesario especificar el tipo de dato.
Se puede agregar una variable al arreglo.
Array

*/

// Manera 1
const aArreglo1 = [1, "Hola", true, [1, 4, 6]];
console.log(aArreglo1);

// Manera 2
const aArreglo2 = Array.of(2,"Hola", true, aArreglo1);
console.log(aArreglo2)

// Manera 3
const aArreglo3 = new Array(3,true,"adiós");
console.log(aArreglo3);

// Funciones|metodos|acceso arreglo
const aFrutas = ["manzana", "naranjas", "uvas", "sandias", [1, 2, 3, 4, 5, ['A', 'B', 'C']]];

// Notación de corchetes, los elementos se cuentan a partir del 0.
console.log(aFrutas[1]);
console.log(aFrutas[3]);
console.log(aFrutas[4]);
console.log(aFrutas[4][4]); // Acceso al elemento de un array, dentro de una array.
console.log(aFrutas[4][5][1]); // Acceso al elemento de un array, dentro de un array, dentro de una array.


/*
----- Métodos -----

length -> Longitud del arreglo, retorna el número de elementos.
push -> Añade un elemento al arreglo de forma dinamica al final de los elementos.
pop -> elimina el último elemento del arreglo.
unshift -> Agrega un elemento al incio del arreglo.
shift -> Elimina el primer elemento del arreglo.
sort -> Ordena los elementos de un arreglo.
*/

//metodo length
const aLetras = ['b', 'd', 'c', 'a'];
console.log(aLetras.length);

//metodo push
aLetras.push('e');
console.log(aLetras);

//método pop
aLetras.pop();
console.log(aLetras);

//método unshift
aLetras.unshift(1);
console.log(aLetras);

//método shift
aLetras.shift()
console.log(aLetras);

//método sort
aLetras.sort();
console.log(aLetras);

