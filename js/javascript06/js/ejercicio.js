/*
Autor:      Josué Hernández
Archivo:    ciclos.js
Fecha:      13DIC21
Objetivo:   Ejercicio Actividad 06 -> Algoritmos III

Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- Multiplicar cada numero por dos
- Guardar los resultados en un arreglo llamado 'resultado'
- Imprimir en consola o en el body cada elemento del arreglo 'resultado'


*/

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultados = [];

for (let i = 0; i < numeros.length; i++) {
    resultados.push((numeros[i] * 2));    
}


resultados.forEach(function(el, i){
    document.write("<h1>El resultado del elemento "+ i + " es: " + el + "</h1>" );
})


