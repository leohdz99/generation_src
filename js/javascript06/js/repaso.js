/*
Autor:      Josué Hernández
Archivo:    repaso.js
Fecha:      13DIC21
Objetivo:   Actividad 06 -> Algoritmos III
*/

// Declaración de variables
let aComida = ["Pozole", "Tacos", "Tortas"];

//Impresión de variables
console.log(aComida);

/*
repaso de métodos

length -> Longitud del arreglo, retorna el número de elementos.
push -> Añade un elemento al arreglo de forma dinamica al final de los elementos.
pop -> elimina el último elemento del arreglo.
unshift -> Agrega un elemento al incio del arreglo.
shift -> Elimina el primer elemento del arreglo.
foreach -> realiza un ciclo para realizar una acción por cada elemento del arreglo


*/

//push
aComida.push("Quesadillas");
console.log(aComida);

//pop
aComida.pop();
console.log(aComida);

//unshift
aComida.unshift("Gorditas");
console.log(aComida);

//shift
aComida.shift();
console.log(aComida);

//foreach
aComida.forEach(function(elemetos){
    console.log(elemetos);
})


// ------ Ejemplo Números forEach -------

const aNumeros1 = [1, 2, 3, 4 ];
console.log();

// En la función del for each no hace la mutación del arreglo
// Solo modifica los datos dentro de la función forEach()
aNumeros1.forEach(function(el){
    el += 1;
    console.log(el);
})

console.log(aNumeros1);


//----- Ejecicio ------

// Declaración de variables
const aNumeros2 = []
console.log(aNumeros2);


// Declaración de funciones
function sumar(eNum){
    let eRes = eNum + 1;
    // return aNumeros2.push(eRes);
    return aNumeros2.unshift(eRes);
}

//Principal
sumar(3);
sumar(5);
sumar(6);
sumar(7);
sumar(32);

console.log(aNumeros2)