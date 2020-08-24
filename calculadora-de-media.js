const notas = require("readline-sync");

/* [S2] Exercício {reprograma}

Programinha que vai receber 6 notas,
calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

regras:

Para ser aprovada a média tem que ser maior ou igual 7;
Para ser reprovada a média tem que ser menor que 5;
Para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7; */

console.log ('>>>>>>Entre com o valor das notas<<<<<< ')
const nota1 = notas.question ('----Informe a Primeira Nota----: ')
const nota2 = notas.question ('----Informe a Segunda Nota----: ')
const nota3 = notas.question ('----Informe a Terceira Nota----: ')
const nota4 = notas.question ('----Informe a Quarta Nota----: ')
const nota5 = notas.question ('----Informe a Quinta Nota----: ')
const nota6 = notas.question ('----Informe a Sexta Nota----: ')

const total = parseInt(nota1) + parseInt(nota2)+parseInt(nota3)+parseInt(nota4)+parseInt(nota5)+parseInt(nota6)
console.log ('---- Soma das médias ----:  ' + total.toFixed(2))

const mediaFinal = total/6 
 console.log( '----Valor da Média Final ----:  ' + mediaFinal.toFixed(2))

if(mediaFinal >= 5 && mediaFinal < 7 ){
    console.log ('==== Recuperação! ====')
} else if (mediaFinal >= 7){
    console.log ('==== Aprovada! ====')
} else {
    console.log ('==== Está Reprovada! ====')
}




