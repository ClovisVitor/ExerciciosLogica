//Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

let readline = require('readline-sync');

let n = parseFloat(readline.question("Informe o numero que voce deseja saber o Antecessor e Sucessor: "));

console.log(`o Antecessor de ${n} é: ${n-1} e o Sucessor de ${n} é: ${n+1}`);
