/*
Nome      : app02
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 02 Alterando arrays
Data      : 16/05/2024
*/

const color = require('@colors/colors');

console.clear();

console.log
("1 - Crie uma função que receba dois arrays e os concatene em um único array. \n".cyan);
function concatene(arr1, arr2) {
    return arr1.concat(arr2);
}
let lista1 = ["abacate", "cenoura", "pepino"];
let lista2 = ["amora", "uva", "abacaxi"];
console.log(`Array 1: [ ${lista1} ]`);
console.log(`Array 2: [ ${lista2} ]`);
console.log(`Array Resultado: [ ${concatene(lista1, lista2)} ] \n`);


console.log
("2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros. \n".cyan);
let numeros = [1,2,3,4,5,6,7,8,9,10];
let parteNumeros = numeros.slice(3, 8);
console.log(`parteNumeros: ${parteNumeros} \n`);


console.log
("3 - Dado o array frutas contendo frutas que desejamos comprar na feira:".cyan);
console.log
("       const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']".gray);
console.log
("    Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices. \n".cyan);
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, "Kiwi", "Pêssego");
console.log(`Resultado: ${frutas} \n`);


console.log
("4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas. \n".cyan);
let menuPrincipal = ["Carne de Sol", "Arrumadinho", "Filé ao molho", "Mocotó"];
let menuDeSobremesas = ["Pudim", "Rocambole", "Lolita"];
let menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log("menuPrincipal: ".green + menuPrincipal);
console.log("menuDeSobremesas: ".green + menuDeSobremesas);
console.log("menuCompleto: ".green + menuCompleto + "\n");

console.log
("5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. \n".cyan);
const la = [1, 2, 3];
const lb = [4, 5, 6];
const lc = [7, 8, 9];
const listaBidimensional = [la, lb, lc];
console.log(listaBidimensional);
console.log(la);
console.log(lb);
console.log(lc);
console.log();

console.log
("6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior. \n".cyan);
console.log(`Elemento na segunda linha e terceira coluna ${listaBidimensional[1][2]} \n`);


console.log
("7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente. \n".cyan);
console.log("Numero 15 adicionado na terceira linha e segunda coluna ")
listaBidimensional[2][1] = 15;
console.log(listaBidimensional);
