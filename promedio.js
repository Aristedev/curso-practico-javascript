// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

function calcularMediaAritmetica(lista) {
    // variable 'let' ya que se cambiara en el futuro por el ciclo 'for'
    // let sumaLista = 0; // la suma inicia en 0
    // for (let i = 0; i < lista.length; i++) {
      //  sumaLista = sumaLista + lista[i]; // [i] con este metodo ingresa dentro de  la lista
    // }

    // Alternatica al for para iterar 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}