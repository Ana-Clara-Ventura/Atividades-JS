console.clear();
const teclado = require('prompt-sync')();

let lado1: number;
let lado2: number;
let lado3: number;

lado1 = parseFloat(teclado(`Digite o primeiro lado: `));
lado2 = parseFloat(teclado(`Digite o segundo lado: `));
lado3 = parseFloat(teclado(`Digite o terceiro lado: `));

if (Number.isNaN(lado1) || Number.isNaN(lado2) || Number.isNaN(lado3)) {
    console.log(`Entrada com caracteres, utilize números`);
}
else if ((lado1 == lado2) && (lado2 == lado3)) {
    console.log(`Os três lados iguais, Equilátero`);
}
else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
    if ((lado1 != lado2) || (lado1 != lado3) || (lado2 != lado3)) {
        console.log(`Dois lados iguais, Isóceles`);
    }
    else {
        console.log(`Algo deu errado!`);
    }
}
else if ((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)) {
    console.log(`Três lados diferentes, Escaleno`);
}
else {
    console.log(`Algo deu errado!`);
}