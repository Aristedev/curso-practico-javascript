// SOLO EL ANALISIS DE LA LISTA DE PERSONAS EN salarios.js

// HELPERS O UTILS:
//  * VERIFICAMOS SI LA LISTA ES PAR O IMPAR
function esPar(numerito) {
    // if (numerito % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // Las 5 lineas de  la condicional anterior se pueden resumir en:
    return(numerito % 2 == 0);
};

//  * CALCULADORA DEL PROMEDIO DE LOS NUMEROS INGRESADOS
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoVal) {
            return valorAcumulado + nuevoVal;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


// CALCULADORA DE MEDIANA:
//  * MEDIANA DE SALARIOS QUE RECIBE LA LISTA DE CUALQUIER PAÍS
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1]; //numero anterior
        const personitaMitad2 = lista[mitad]; // numero posterior
        
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};


// MEDIANA GENERAL:
// --------------------------------------------- DEBEN ESTAR EN ESTE ORDEN -> LAS CONSTANTES NO PRESENTAN HOISTING ----------------------
//  * FILTRAMOS LOS SALARIOS DE LAS PERSONAS
const salariosPe = peru.map(
    function (personita) {
        return personita.salario;
    }
);

//  * ORDENAMOS LOS SALARIOS, DE MENOR A MAYOR
const salariosPeSort = salariosPe.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);
// -------------------------------------------------------------------------------------------------------------------------------------
const medianaGeneralPe = medianaSalarios(salariosPeSort);


// MEDIANA DEL TOP 10%:
// El corte spliceStart debe empezar en el 90%
// const spliceStart = 0;
//spliceStart = (salariosPeSort.lenght * (100 - 10)) / 100;
const spliceStart = (salariosPeSort.length * (90)) / 100;

// El corte spliceCount debe ser el resto del porcentaje(hasta el final)
// const spliceCount = 0;
const spliceCount = salariosPeSort.length - spliceStart;

const salariosPeTop10 = salariosPeSort.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Pe = medianaSalarios(salariosPeTop10);

console.log({
    medianaGeneralPe,
    medianaTop10Pe
});