const lista1 = [
    100,
    200,
    500,
    400000000,
];

// Usamos la función hecha en promedio.js
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

// mitad de la lista(mitadLista1) que irá como index de lista1
// indicando el numero que se encuentra en medio
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    // if (numerito es par?) {
    //     return true;
    // } else {
    //     return false;
    // }

    if (numerito % 2 === 0) { // % -> módulo: extraemos  el residuo
        return true;
    } else {
        return  false;
    }
}

let mediana;

// if (lista1 es par?) {   
//     necesitamos dos elementos
//      -> el promedio
//      -> mediana
// } else [
//     posicion mitadLista1 dentro de lista1
//     -> mediana
// ]

if (esPar(lista1.length)) {
    // PARA UNA LISTA DE ELEMENTOS PAR

    // Para una lista con 4 elementos
    // mitadLista1 = 2
    // Array -> [0, 1, 2, 3]
    // Los elementos del medio se encuentran en la posición 1  y 2
    // mitadLista1 - 1 = 1
    // mitadLista1 = 2
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1]; 
    // no puede ser +1 ya que el indice del array inicia en 0 -> [0, 1, 2, 3]

    // La funcion recibe un Array con los elementos [elemento1, elemento2]
    // Parametro -> [elemento1, elemento2]
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
} else {
    // PARA UNA LISTA DE ELEMENTOS IMPAR

    // se ingresa mitadLista1 para indicar el
    // el numero que se encuentra en medio del array lista1
    mediana = lista1[mitadLista1];
}