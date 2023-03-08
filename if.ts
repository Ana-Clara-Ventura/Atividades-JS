let verdadeiro: boolean = true;
let falso: boolean = false;

if (falso && falso && falso) {
    console.log(`Condição lógica de 0, 0 e 0 é ${falso}`);
}
if (falso && falso && verdadeiro) {
    console.log(`Condição lógica de 0, 0 e 1 é ${falso}`);
}
if (falso && verdadeiro && falso) {
    console.log(`Condição lógica de 0, 1 e 0 é ${falso}`);
}
if (falso && verdadeiro && verdadeiro) {
    console.log(`Condição lógica de 0, 1 e 1 é ${falso}`);
}

if (verdadeiro && falso && falso) {
    console.log(`Condição lógica de 1, 0 e 0 é ${falso}`);
}
if (verdadeiro && falso && verdadeiro) {
    console.log(`Condição lógica de 1, 0 e 1 é ${falso}`);
}
if (verdadeiro && verdadeiro && falso) {
    console.log(`Condição lógica de 1, 1 e 0 é ${falso}`);
}
if (verdadeiro && verdadeiro && verdadeiro) {
    console.log(`Condição lógica de 1, 1 e 1 é ${verdadeiro}`);
}

else {
    console.log(`Algo deu errado!`);
}