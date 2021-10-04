// SOLO EL ANALISIS DE LA LISTA DE PERSONAS EN salarios.js

// FILTRAMOS LOS SALARIOS DE LAS PERSONAS
const salariosPe = peru.map(
    function (personita) {
        return personita.salario;
    }
);

// ORDENAMOS LOS SALARIOS, DE MENOR A MAYOR
const salariosPeSort = salariosPe.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

// VERRIFICAMOS SI LA LISTA ES PAR O IMPAR
function esPar(numerito) {
    // if (numerito % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // Las 5 lineas de  la condicional anterior se pueden resumir en:
    return(numerito % 2 == 0);
};

// CALCULAMOS EL PROMEDIO DE LOS NUMEROS INGRESADOS
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoVal) {
            return valorAcumulado + nuevoVal;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// MEDIANA DE SALARIOS QUE RECIBE LA LISTA DE CUALQUIER PAÍS
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
}

console.log(
    medianaSalarios(salariosPeSort)
);