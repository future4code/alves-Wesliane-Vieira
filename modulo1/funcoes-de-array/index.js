const carta = comprarCarta()

console.log("Boas vindas ao jogo de Blackjack!")

// esse if/esle é pra usar o confirm 
if(confirm("Quer iniciar uma nova rodada?")){
   //pegar as cartas
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   // mostrar as duas cartas e pontuação
   let textoUsuario = `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${carta1Usuario.valor + carta2Usuario.valor} `
   let textoComputador = `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${carta1Computador.valor + carta2Computador.valor}`

   console.log(textoUsuario)
   console.log(textoComputador)
   // pontuação 
   let pontosUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontosComputador = carta1Computador.valor + carta2Computador.valor

   // esse if/else é pra mostrar quem ganhou
   if(pontosComputador > pontosUsuario){
   console.log("O computador ganhou!")
     } else if( pontosUsuario > pontosComputador){
      console.log("O usuário ganhou!")
   } else(pontosComputador === pontosUsuario) 
      console.log("Empate!")
} else {
   console.log("O jogo acabou.") 

}

