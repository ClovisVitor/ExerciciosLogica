//Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarBooleanos(valor1, valor2) {
    if (valor1 && valor2) {
        console.log("Ambos são VERDADEIRO");
    } else if (!valor1 && !valor2) {
        console.log("Ambos são FALSO");
    } else {
        console.log("Um é VERDADEIRO e o outro é FALSO");
    }
}

rl.question("Digite o primeiro valor (true/false): ", (resposta1) => {

    const valor1 = (resposta1.toLowerCase() === 'true');


    rl.question("Digite o segundo valor (true/false): ", (resposta2) => {

        const valor2 = (resposta2.toLowerCase() === 'true');

        verificarBooleanos(valor1, valor2);

        rl.close();
    });
});