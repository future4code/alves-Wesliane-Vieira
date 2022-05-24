// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
     
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    const par = (x) => x % 2 === 0
    
    let pares = []
    
    for (i = 0; i < array.length; i++){
        if (par(array[i])) {
            pares.push(array[i])
        }
    }
return pares 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const par = (x) => x % 2 === 0

    let pares = []

    for (i = 0; i < array.length; i++){
        if (par(array[i])) {
            pares.push(array[i])
        }
    }
    
    let paresElevados = Math.pow(pares, 2)

 return paresElevados
    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let obj = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: (num2 % num1) === 0, 
        diferenca: Math.abs(num2 - num1)
   }

   return obj
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const par = x => x % 2 === 0 
   let numeros = array[n]
   const pares = numeros.filter(par)

   return pares 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else 
        return "Isósceles"
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   return Math.max(array).concat(Math.min(array))

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const filmes = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores:["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoas = {
        nome: "Astrodev",
        idade: 25, 
        email: "astrodev@labenu.con.br",
        endereco: "Rua do Futuro, 4"
  }
    const novasPessoas = {...pessoas, nome: "ANÔNIMO"}


  return novasPessoas

   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const pessoa = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    function apenasAutorizados(pessoa){
        if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
          return pessoa 
    }

    return pessoa.filter(apenasAutorizados)
 
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoa = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    function naoAutorizados(pessoa){
        if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5)
          return pessoa 
    }

    return pessoa.filter(naoAutorizados)
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const conta = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    let sum = 0;
function retornarContar (conta){
for (let i = 0; i < conta.compras; i++) {
    sum += conta.compras[i]
    return sum
}

 let resultado = sum - conta.saldoTotal
}
return conta.filter(retornarContar)


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    const consulta =  [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" }
      ]

return consulta.sort()
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    const consulta =  [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" }
      ]

consulta.dataDaConsulta(function (a, b) {
    return a - b 
})
   return consulta.sort()
}

