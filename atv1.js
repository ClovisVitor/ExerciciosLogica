//Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma //
//entre A e B é mostre se a soma é menor que C.//

let readline = require("readline-sync");

let a = parseFloat(readline.question("informe o valor de a: "));
let b = parseFloat(readline.question("informe o valor de b: "));
let c = parseFloat(readline.question("informe o valor de c: "));

console.log()

let resultado = a + b


if (a + b < c) {
    console.log(`A soma de ${a} + ${b} = ${resultado}, é menor do que ${c}`)
} else {
    console.log(`A soma de ${a} + ${b} = ${resultado}, é maior do que ${c}`)
}

console.log()
console.log("Fim do programa!")
console.log()