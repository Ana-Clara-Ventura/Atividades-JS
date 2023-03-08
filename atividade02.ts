console.clear();
const teclado = require('prompt-sync')();

let lado1: number = teclado(`Digite o primeiro lado: `);
let lado2: number = teclado(`Digite o segundo lado: `);
let lado3: number = teclado(`Digite o terceiro lado: `);

if ((lado1 === lado2) && (lado2 === lado3)) {
    console.log(`O triângulo é equilátero.`)
}
else if ((lado1 !== lado2) && (lado2 !== lado3)) {
    console.log(`O triângulo é escaleno.`)
}
else if ((lado1 !== lado3) && (lado2 !== lado3)) {
    console.log(`O triângulo é escaleno.`)
}
else if ((lado1 !== lado2) && (lado2 == lado3)) {
    console.log(`O triângulo é isóceles.`)
}
else if ((lado1 == lado2) && (lado2 !== lado3)) {
    console.log(`O triângulo é isóceles.`)
}
else if ((lado1 !== lado3) && (lado2 == lado3)) {
    console.log(`O triângulo é isóceles.`)
}
else if ((lado1 == lado3) && (lado2 !== lado3)) {
    console.log(`O triângulo é isóceles.`)
}
else {
    console.log(`Algo deu errado!`);
}