// PROMEDIO PONDERADO

// ARRAY CON OBJETOS
// Objetos -> Examen, nota, porcentaje

const notas = [
    {
        examen: 'Teoría 1',
        nota: 11,
        porcentaje: 15
    },
    {
        examen: 'Continua 1',
        nota: 11,
        porcentaje: 10
    },
    {
        examen: 'Teoría 2',
        nota: 11,
        porcentaje: 10
    },
    {
        examen: 'Continua 2',
        nota: 11,
        porcentaje: 20
    },
    {
        examen: 'Teoría 3',
        nota: 11,
        porcentaje: 10
    },
    {
        examen: 'Continua 3',
        nota: 11,
        porcentaje: 35
    },
];

// MULTIPLICAMOS CADA NOTA CON SU RESPECTIVO PORCENTAJE
const notasConPorcentajes = notas.map(function(notaObjeto){
    return notaObjeto.nota * notaObjeto.porcentaje;
});

// SUMA DE LOS ELEMENTOS DEL ARREGLO DE NOTA*PORCENTAJE (notaObjeto.nota * notaObjeto.porcentaje;)
// SUMA DE LOS ELEMENTOS PORDUCIDOS POR MAP()
const sumaDeNotasConPorcentajes = notasConPorcentajes.reduce(
    function(sum = 0, nuevoVal){
        return sum + nuevoVal;
    }
    );

// SUMA DE LOS PORCENTAJES

// Primero hacemos que nos retorne solo los Porcentajes
const porcentajes = notas.map(
    function(notaObjeto) {
        return notaObjeto.porcentaje;
    }
);

// Ahora si sumamos los porcentajes
// Ya que el .map() ahora nos provee(return) solo porcentajes
const sumaDePorcentajes = porcentajes.reduce(
    function(sum = 0, nuevoVal) {
        return sum + nuevoVal;
    }
);

const promedioPonderadoNotasConPorcentajes = sumaDeNotasConPorcentajes / sumaDePorcentajes;