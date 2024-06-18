/*
Nome      : app04
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 04 Funções Callback
Data      : 02/06/2024
Edtitado no vi
Teste se atualização repositorio continua funcionando
*/

const read = require('readline-sync');
const color = require('@colors/colors');
console.clear();
function pare(){
  let espere = read.question("Pressione a tecla <enter> para continuar...");
  console.clear();
}

console.log(
    "1- Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.".cyan
);
const arrayExemplo = ["banana", "maçã", "manga", "abacate", "mamão"];
console.log("ArrayExemplo = ".yellow + arrayExemplo);
arrayExemplo.forEach(imprimeElemento);
function imprimeElemento(elemento, index) {
    console.log(`${elemento} ${index}`);
}
arrayExemplo.forEach((elemento, indice) => console.log(`${elemento} ${indice}`.yellow));

console.log(
    "2- Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.".cyan
);
console.log("");
function executaOperacaoEmArray(lista, matematica) {
  lista.forEach(matematica);
}
function matematica(elemento) {
  console.log(elemento += 10);
}
const lista2 = [100, 200, 300, 400, 500, 600];
console.log(executaOperacaoEmArray(lista2, matematica));



console.log(
  '3- Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".'.cyan
);

const lista3 = [10, 150, 299, 530, 1000, 1560];
console.log(`Array recebido = ${lista3}`.yellow);
function verificaExistenciaNumero(numero3) {
  return lista3.findIndex((valor) => valor == numero3)
}
let numero3 = Number(read.question("Informe o numero ")).toFixed(0);
console.log(verificaExistenciaNumero(numero3));
console.log("");

console.log(
  "4- Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.".cyan
);
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
console.log(`Turma "A" = ${nomesTurmaA}`.yellow);
console.log(`Turma "B" = ${nomesTurmaB}`.yellow);

console.log(
  "Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.".cyan
);
const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
console.log(`Turma "A" + "B" = ${todosAlunos}`.yellow);
function buscaAluno(nome) {
  console.log(nome);
  console.log(typeof nome);
//  const resultado = todosAlunos.find((aluno) => aluno === nome);
  const resultado = todosAlunos.find((aluno) => aluno.includes(nome));
return resultado;
}

const nomeRecebido = read.question("Informe nome do aluno: ").yellow;
console.log(`Resultado da Pesquisa: ${buscaAluno(nomeRecebido)}`)

console.log(
  "5- Considere um array de números inteiros.".cyan
);

const numeros = [6, 9, 12, 15, 18, 21];
console.log(`Esse aí ${numeros}`.yellow);
console.log("Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.".cyan
);
numeros.forEach((elemento) => console.log(elemento * 3));
console.log(`o índice do número 18 no array original ${numeros.findIndex((elemento) => elemento === 18)}`);

