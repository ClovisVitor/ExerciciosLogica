//Faça um algoritmo para receber um número qualquer e imprimir na tela 
//se o número é par ou ímpar, positivo ou negativo

let readline = require('readline-sync');

let n = parseFloat(readline.question("Informe o numero para a consulta: "));
console.log()
    if (n % 2 == 0) {
        console.log(`O numero:${n} é Par`);
    } else {
        console.log(`O numero:${n} é Impar`);
    }

console.log()
console.log("Fim do Programa!")
console.log()