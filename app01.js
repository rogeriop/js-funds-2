/*
Nome      : app01
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 01 O que são arrays
Data      : 13/05/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');
console.clear();

console.log
("1- Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.".yellow);
let arrayEsparso = [,10,,20,,,,30];
console.log(`Array esparso ${arrayEsparso}`);
console.log(`Comprimento deste array = ${arrayEsparso.length}`);

console.log
("2- Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.".yellow);
let cincoElementos = [1,2,3,4,5];
console.log(`Array com cinco elementos = ${cincoElementos}`);
cincoElementos[0] = 8;
console.log(`Substituicao do primeiro elemento ${cincoElementos}`);

console.log
("3- Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.".yellow);
let meuArray = [];
meuArray.push(10);
meuArray.push(136);
meuArray.push(5);
console.log(`meuArray = ${meuArray}`);
meuArray[0] = meuArray[0] * 2;
console.log(`meuArray = ${meuArray}`);

console.log
("4- Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.".yellow);
let arrayVazio = [];
console.log(`arrayVazio ${arrayVazio}`);
arrayVazio.push(12);
arrayVazio.push(15);
arrayVazio.push(3);
console.log(`ArrayVazio com valores adicionados ${arrayVazio}`);


console.log
("5- Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.".yellow);
let clinica = [];
clinica.push("cachorro");
clinica.push("cavalo");
clinica.push("elefante");
console.log(`Fila de atendimento = ${clinica}`);
clinica.pop();
console.log(`Fila de atendimento = ${clinica}`);
clinica.pop();
console.log(`Fila de atendimento = ${clinica}`);
clinica.pop();
console.log(`Fila de atendimento = ${clinica}`);

