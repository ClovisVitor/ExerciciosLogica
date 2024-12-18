//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, 
//calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. 
//(Base para o Salário mínimo R$ 1.293,20).

let readline = require('readline-sync');

let salario = parseFloat(readline.question("Digite o salario: "));
let salamin = 1293;
let total


function calculo (salario, salamin) {
    let calculo = salario / salamin;
    let total = calculo.toFixed(2);
    return total;
}

console.log()
console.log(`Você recebe ${calculo(salario,salamin)} Salarios minimos`);
console.log()
console.log("Fim do Programa!")