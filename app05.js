/*
Nome      : app05
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 05 Avançando em arrays
Data      : 23/06/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');
console.clear();
function pare(){
  const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
  if(ordem==9){
    console.log('End-of-Job'.green);
    process.exit();
  } 
  console.clear();
}

console.log(
    "1- Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.".cyan);
console.log(
    '   Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).'.cyan);
function juntaArrays(...arrays) {
  return [].concat(...arrays);
}
let ar1 = [1, 2, 3];
let ar2 = [7, 8, 9];
let ar3 = [4, 5, 6];
console.log(`array1 = ${ar1}`);
console.log(`array2 = ${ar2}`);
console.log(`array3 = ${ar3}`);
console.log(`Resultado = ${juntaArrays(ar1, ar2, ar3)}`);
pare();

console.log("2- Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.".cyan);
const valores = [10, 14, 50, 106, 87, 207];
console.log(`Valores ${valores}`);
const soma = valores.reduce((acumulador, valor) => acumulador + valor,0);
console.log(`Soma = ${soma}`);
pare();

console.log("3- Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.".cyan);
console.log("   Considere duas listas de cores:".cyan);
console.log("   const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']; ".cyan);
console.log("   const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];".cyan);
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
const coresLista1_2 = coresLista1.concat(coresLista2);
console.log(`União das listas = ${coresLista1_2}`.grey);
const listaIntermediaria = new Set(coresLista1_2);
const listaFinal = [...listaIntermediaria];
console.log(`lista final = ${listaFinal}`);
pare();

console.log("4- Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.".cyan);
let arrayPar = [];
function retornaNumerosPares(lista){
  return lista.filter(num => num % 2 == 0);
}
const listNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`lista de numeros = ${listNumeros}`);
console.log(`Só os pares da lista = ${retornaNumerosPares(listNumeros)}`)
pare();

console.log("5- Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.".cyan);
function multiplosDeTres(lista) {
  return lista.filter(num => (num % 3 == 0) && (num > 5)); 
}
const listaNumeros = [3, 9, 10, 15, 18, 20, 25, 33];
console.log(`Lista de numeros = ${listaNumeros}`);
console.log(`Só múltiplos de 3 e maior que 5 = ${multiplosDeTres(listaNumeros)}`);
pare();

console.log("6- Crie uma função que receba um array de números e retorne a soma de todos os elementos.".cyan);
function somaElementos(arr) {
  return arr.reduce((acumulador, num) => acumulador + num, 0);
}
const arrayNumeros = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`Lista de valores = ${arrayNumeros}`);
console.log(`Soma do Array = ${somaElementos(arrayNumeros)}`);
pare();

console.log("End-of-job".green);
