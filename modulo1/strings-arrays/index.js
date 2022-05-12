/* Interpretação de código
1- a. undefined
   b. null
   c. 11
   d. 3 
   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   f. 9
2- SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

const nomeDoUsuario = prompt("Qual seu nome?");
const emailDoUsuario = prompt("Qual seu e-mail?");
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + " !");

const comidas = ["batata frita", "mandioca frita", "strogonoff", "feijão", "salada"];

console.log(comidas);

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const comidaDoUsuario = prompt("Qual sua comida preferida?");
comidas.splice(1,1); 
comidas.push(comidaDoUsuario);
console.log(comidas);

var listaDeTarefas = []; 

var primeiraTarefa = prompt("Qual a primeira tarefa que você deve realizar hoje?");
var segundaTarefa = prompt("Qual a segunda tarefa que você deve realizar hoje?");
var terceiraTarefa = prompt("Qual a terceira tarefa que você deve realizar hoje?");

var listaDeTarefas = [ primeiraTarefa, segundaTarefa, terceiraTarefa];

console.log(listaDeTarefas);

var indice = prompt("Digite o índice da tarefa já realizada(0, 1 ou 2).");

listaDeTarefas.splice(indice, 1);

console.log(listaDeTarefas);
