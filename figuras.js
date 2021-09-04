// Código del CUADRADO
console.group("Cuadrados"); // Abrir: Para agrupar los comandos JS
    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

    function perimetroCuadrado(lado){
        return lado * 4;
    }
    // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

    function areaCuadrado(lado) {
        return lado * lado;
    }
    // console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd(); // Cerrar: Finalizamos la agrupacion de los cuadrados

// Código del TRIÁNGULO
console.group("Triangulos");
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log(
    //     "Los lados del triangulo miden: " 
    //     + ladoTriangulo1 
    //     + "cm, " 
    //     + ladoTriangulo2 
    //     + "cm, "
    //     + baseTriangulo
    //     + "cm"
    //     );

    // const alturaTriangulo = 5.5;
    // console.log("La altura del triángulo mide: "
    //     + alturaTriangulo
    //     + "cm");

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    // console.log("El perímetro del triángulo es: "
    //     + perimetroTriangulo
    //     + "cm");

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    // console.log("El área del triángulo es: "
    //     + areaTriangulo
    //     + "cm^2");
console.groupEnd();

// Código del CÍRCULO
console.group("Círculos");

    // Radio
    // const radioCirculo = 4;
    // console.log("El radio del circulo es: "
    //     + radioCirculo
    //     + "cm");

    // Diámetro
    function diametroCirculo(radio) {
        return radio * 2;
    } 
    // console.log("El diámetro del circulo es: "
    //     + diametroCirculo
    //     + "cm");

    // PI
    const PI = Math.PI;
    console.log("PI es: "
        + PI);
    
    // Circunferencia
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    // console.log("El perímetro del circulo es: "
    //     + perimetroCirculo
    //     + "cm");

    // Área
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }
    // console.log("El área del círculo es: "
    //     + areaCirculo
    //     + "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    // Lectura de todo el elemento HTML
    const input = document.getElementById("InputCuadrado");
    // Obtenemos solo el valor de la etiqueta 'input'
    const value = input.value;
    // Calculo del perímetro del cuadrado
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Calcular la altura de un triangulo isosceles
function calcularAlturaIsosceles() {
    const inputLado1 = document.getElementById("InputLado1");
    const lado1 = inputLado1.value;
    // Con o sin 'Number' para este caso el >resultado< es igual
    // const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const lado2 = inputLado2.value;

    const inputBase = document.getElementById("Base");
    const base = inputBase.value;

    if(lado1 == lado2) {
        // Se halla la altura del triangulo isósceles:
        const altura = Math.sqrt((lado1**2)-((base**2)/4));
        // Esta expresion tambien da el mismo >resultado< :
        // altura = Math.sqrt((lado1**2)-((base/2)**2));
           
        alert(altura);
    } else {
        alert("No es triangulo isosceles.");
    }
}