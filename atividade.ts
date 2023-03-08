console.clear();
const teclado = require ('prompt-sync')();

let nome: string = teclado(`Digite o nome do aluno: `)
let numero: number = teclado(`Digite a idade: `);

if (numero >= 18){
    console.log(`O aluno ${nome} é maior de idade.`);
}

else if (numero < 18){
    console.log(`O aluno ${nome} é menor de idade.`);
}

else {
    console.log(`Algo deu errado!`);
}