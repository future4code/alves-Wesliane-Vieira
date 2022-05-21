/* Exercícios de interpretação de código:
1- Matheus Nachtergaele
   3
   {canal: "Globo", horario: "14h"}

2 - a) {nome: "Juca", idade: 3, raca: "SRD"}
       {nome: "Juba", idade: 3, raca: "SRD"}
	   {nome: "Jubo", idade: 3, raca: "SRD"}
	b) Realiza a cópia de um objeto.

3 - a) false
       undefined
	b) O valor da propiedade sera impresso. 
*/

// Exercícios de interpretação de código.

// 1 - a)
function pessoaLista() {
const pessoa = {
	nome: "Wesliane",
	apelidos: ["Anne", "Nega", "Princesa"]
		}
	
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`) 

	}

pessoaLista()


// b)
function pessoaLista() {
	const novaPessoa = {...pessoa, apelidos: ["Anninha", "Negainha", "Princesinha"]  }

	console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`) 

}

pessoaLista()


//2 - a)

const person = {
	nome: "Marco",
	idade: 45,
	profissao: "Tatuador"
}

const person = {
	nome: "Lara",
	idade: 26,
	profissao: "Cozinheira"
}

// b) 

function myFunction(person) {
  return arr = [person.nome, person.nome.lenght, person.idade, person.profissao, person.profissao.length]
}

console.log(myFunction(person))

