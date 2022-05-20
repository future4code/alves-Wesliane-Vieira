/* Exercícios de interpretação de código.
1 - a) O código retorna a mensagem "Passou no teste." se a respotaDoUsuario for um número que ao ser dividido pro 2 tenha resto igual a 0. Se o resto tiver o valor diferento de 0,  a mensagem será "Não  passou no teste.".
    b) Números pares.
    c) Números ímpares.

2 - a) O código indica o preço das frutas, dentre as frutas disponíveis.
    b) O preço da fruta  Maçã  é R$  2.25
    c) O preço da fruta  Maçã  é R$  5 
    
3 - a) A primeira linha de código pede um número ao usuário, e o armazena como variável. 
    b) número = 10 - Esse número passou no teste
       número = -10 - Nao aparece nada no console
    c) consle.log(mensagem) está definido no escopo global, porém deveria estar no escopo local (dentro do bloco if).
*/

// Exercícios de escrita de código 
// 1 - 
const age = Number(prompt("Qual sua idade?"))

if(age >= 10) {
    console.log("Você pode dirigir.")
} else if(age < 18) {
    console.log("Você não pode dirigir.")
}

// 2 - 

alert ("Respondar - M para matutino, V para vespertino ou N para noturno.")
const turno = prompt("Em qual turno você estuda?").toUpperCase()

if(turno === "M") {
    console.log("Bom Dia!")
} else if(turno === "V") {
    console.log("Boa Tarde!")
} else if(turno === "N") 
    console.log("Boa Noite!")


// 3 - 

alert ("Respondar - M para matutino, V para vespertino ou N para noturno.")
const turno = prompt("Em qual turno você estuda?").toUpperCase()

switch(turno) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Tarde!");
        break;
} 

// 4 - 

const genero = prompt("Qual o gênero do filme escolhido?").toLowerCase()
const preco = prompt("Qual o preço do ingresso?")

if((genero === "fantasia") && (preco < 15)) {
    console.log("Bom filme!")
} else if ((genero !== "fantasia") && (preco > 15) ) 
    console.log("Escolha outro filme :(")

// Desafios
// 1 -


const genero = prompt("Qual o gênero do filme escolhido?").toLowerCase()
const preco = prompt("Qual o preço do ingresso?")


if((genero === "fantasia") && (preco < 15)) {
    console.log("Bom filme!")
    let lanche = prompt("Qual lanchinho você vai comprar?").toLowerCase()
    console.log(`Aproveite o seu(sua) ${lanche}`)
} else if ((genero !== "fantasia") && (preco > 15) ) 
    console.log("Escolha outro filme :(")

