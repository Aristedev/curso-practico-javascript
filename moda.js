const lista1 = [
    1,
    2,
    2,
    3,
    5,
    6,
    2,
    1,
    3,
    1,
];

const lista1Count = {};

// APLICANDO MAP: Verificamos si se repiten los elementos y contamos cuantas veces se repiten
lista1.map( // .map() ejecuta la función por cada elemento
    function (elemento) { // el parámetro 'elemento' evalua cada elemento del array
        // Las condicionales verifican si los elementos del array se repiten o solo existe un solo elemento sel mismo valor
        if (lista1Count[elemento]) { // cuando el elemento existe
            lista1Count[elemento] += 1; // se le agrega 1 cuando existía el elemento previamente
        } else { // Cuando el elemento no existe previamente
            lista1Count[elemento] = 1; // Es igual a uno ta que solo existe una vez
        }
    }
);

// TRANSFORMAMOS UN OBJETO EN ARRAY
//      Objeto   ------------->  Array
//     lista1Count ----------->  lista1Array
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) { // Comparamos los elementos del array
        // Considerando que ahora tenemos un array, tomamos la posición 1 de este
        // En la posición [1] del array se encuentra el valor de los numeros que se repiten
        return elementoA[1] - elementoB[1]; 
    }
);

// TOMAMOS EL ÚLTIMO ELEMENTO DEL ARRAY ORDENADO
// Último elemento = extensión_del_array - 1
// -1 ,porque el array se cuenta desde el cero 0
const moda = lista1Array[lista1Array.length - 1];