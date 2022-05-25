/* ### Exercícios de interpretação de código ###

1 -   {nome: "Amanda Rangel"  apelido: "Mandi"} 
      0
      [{nome: "Amanda Rangel", apelido: "Mandi"},
      {nome: "Laís Petra", apelido: "Laura"},
      {nome: "Letícia Chijo", apelido: "Chijo"}]

      {nome: "Laís Petra" apelido: "Mandi"}
      1
      [{nome: "Amanda Rangel", apelido: "Mandi"},
      {nome: "Laís Petra", apelido: "Laura"},
      {nome: "Letícia Chijo", apelido: "Chijo"}]

      {nome: "Letícia Chijo" apelidos: "Chijo"}
      2
      [{nome: "Amanda Rangel", apelido: "Mandi"},
      {nome: "Laís Petra", apelido: "Laura"},
      {nome: "Letícia Chijo", apelido: "Chijo"}]

2 -  ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
     
3 -  [{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelidos: "Laura"}]

*/

// ### Exercícios de escrita de código ###

// 1 - 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a) 

 const arrNome = pets.map((pets) => {
    return pets.nome
})

//console.log(arrNome)

 // b)

 const arrRacaSalsicha = pets.filter((pets) => {
     return pets.raca === "Salsicha"
 })

 //console.log(arrRacaSalsicha)

 // c)

 const filteredPoodle = pets.filter((pets) => {
     return pets.raca === "Poodle"

 })


 const arrDescount = filteredPoodle.map((pets) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
 })
 
// console.log(arrDescount)

// 2 - 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) 

 const arrNomeProdutos = produtos.map((produtos) => {
     return produtos.nome 
     
 })

//console.log(arrNomeProdutos)

// b)
// c)

const filteredBebidas = produtos.filter((produtos) => {
    return produtos.categoria === "Bebidas"

})

//console.log(filteredBebidas)

// d)

produtos.includes(7)
produtos.includes(9)

console.log(produtos.includes(10 ,9))




    



 



