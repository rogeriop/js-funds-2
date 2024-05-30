/*
Nome      : app03
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 03 Laços de repetição
Data      : 29/05/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');
console.clear();

//
console.log(
    "1- Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.".cyan);
const lista1 = ["Hortifruti do Biu", "Casa de Carnes", "Mercadinho Nova Vida", "Venda do Branco"];
console.log(`   Array base = [${lista1}]`.gray);
lista1.forEach(exibeElementos);
function exibeElementos(conteudo, index) {
    console.log(`   ${conteudo}`.yellow);
}

//
console.log(
    "2- Crie uma função que receba uma array e imprima no console o número do índice e o elemento.".cyan
)
console.log(`   Array base = [${lista1}]`.gray);
lista1.forEach(exibeElementosMaisIndice);
function exibeElementosMaisIndice(elemento, indice) {
    console.log(`   ${indice} - ${elemento}`.yellow);
}

//
console.log(
    "3- Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.".cyan
);
const listaNumeros = [40, 30, 15, 21, 83];
console.log(`   Array base = [${listaNumeros}]`.gray);
let soma = 0;
listaNumeros.forEach(somaNumeros);
function somaNumeros(elemento, index) {
    soma = soma + elemento;
}
console.log(`   Soma dos elementos do vetor é ${soma}`.yellow);

//
console.log(
    "4- Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.".cyan
);
let menorNumero = 100000;
let maiorNumero = 0;
console.log(`   Array base = [${listaNumeros}]`.gray);
listaNumeros.forEach(acheMaiorAndMenorNumero);
function acheMaiorAndMenorNumero(elemento, index){
    if (elemento < menorNumero) menorNumero = elemento;
    if (elemento > maiorNumero ) maiorNumero = elemento;
}
console.log(`   O menor número é ${menorNumero} e o maior número é ${maiorNumero}`.yellow);

//
console.log(
    "5- Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.".cyan 
);

const numero_s = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
numero_s.forEach(exibeNumerosPares);
function exibeNumerosPares(elemento, index) {
    if(elemento % 2 === 0) {console.log(`   ${elemento}`)};
}

console.log(
    "6- Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.".cyan
);
console.log(`   Array base = [${numero_s}]`.gray);
let somaTudo = 0;
numero_s.forEach(calculaMedia);
function calculaMedia(elemento, index) {
    somaTudo += elemento;
}
console.log(`   Média aritimética = ${Number(somaTudo / numero_s.length)}`);