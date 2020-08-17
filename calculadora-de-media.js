const input = require("readline-sync");

/* [S2] Exercício {reprograma}

Programinha que vai receber 6 notas,
calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

regras:

Para ser aprovada a média tem que ser maior ou igual 7;
Para ser reprovada a média tem que ser menor que 5;
Para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7; */

const input1 = input.question ('valor um')
const input2 = input.question ('valor dois')
const input3 = input.question ('valor tres')
const input4 = input.question ('valor quatro')
const input5 = input.question ('valor cinco')
const input6 = input.question ('valor seis')

const total = parseInt(input1) + parseInt(input2)+parseInt(input3)+parseInt(input4)+parseInt(input5)+parseInt(input6)

console.log(total.toFixed(2));


  