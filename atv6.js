//Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

let readline = require("readline-sync");

let valor = parseFloat(readline.question("Digite o valor: "));
let reajuste;

function calculo (valor, reajuste) {
    reajuste = ((valor*5)/100)
    return valor + reajuste;
}

console.log();
console.log(`O valor com o reajuste de 5% é igual a: ${calculo(valor, reajuste)}`);
console.log();
console.log("Fim do Programa!");