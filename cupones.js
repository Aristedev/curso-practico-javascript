// Definimos las variables de los cupones en un Array
const cupones = ["NIVEL_UNO", "NIVEL_DOS", "NIVEL_TRES"];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// function eleccionCupones(cupon) {
//     switch(cupon) {
//         case 'NIVEL_UNO':
//             descuentoCupon = 10;
//             break;
//         case 'NIVEL_DOS':
//             descuentoCupon = 20;
//             break;
//         case 'NIVEL_TRES':
//             descuentoCupon = 30;
//             break;
//         default:
//             descuentoCupon = 0;
//     }
// }

function calcularPrecioMasCupon() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const valueCupon = inputCupon.value;

    let descuentoCupon; // definimos la variable afuera del switch, debido a la sintaxys del switch
    switch(valueCupon) {
        case 'NIVEL_UNO':
            descuentoCupon = 10;
            break;
        case 'NIVEL_DOS':
            descuentoCupon = 20;
            break;
        case 'NIVEL_TRES':
            descuentoCupon = 30;
            break;
        default:
            descuentoCupon = 0;
    }

    // descuentoCupon = eleccionCupones(valueCupon);

    precioConDescuento = calcularPrecioConDescuento(valuePrice, descuentoCupon);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio total es: $" + precioConDescuento;
}