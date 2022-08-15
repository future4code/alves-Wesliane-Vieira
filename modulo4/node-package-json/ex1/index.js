/* 1- A)Como fazemos para acessar os parâmetros passados na linha de comando para o Node? Utilizando o módulo args, process.argv[2] em diante. */

// B) 

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}.`);