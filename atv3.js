//Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, 
//deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer 
//um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

let readline = require('readline-sync');

let a = parseFloat(readline.question("Informe o valor de A: "));
let b = parseFloat(readline.question("Informe o valor de B: "));

let c

if ( a == b) {
    c = a + b;
    console.log(`O resultado de ${a} + ${b} = ${c}`);
} else {
    c = a * b;
    console.log(`O resultado de ${a} x ${b} = ${c}`)
}