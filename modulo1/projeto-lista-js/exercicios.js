// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
};
console.log(soma(1, 2));
console.log(soma(4, 5));

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
console.log("olá mundo!");
console.log("bananinha");

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Digite um número para altura:");
const largura = prompt("Digite um número para largura:");

console.log(altura * largura);

};

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em qual ano estamos?");
  const anoNasc = prompt("Em que ano você nasceu?");
  
  console.log(anoAtual - anoNasc);

};

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return   peso / (altura * altura);

};

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?");
  const idade = prompt("Qual sua idade?");
  const email = prompt("Qual seu email?");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

};

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua 1ª cor favorita?");
  const cor2 = prompt("Qual sua 2ª cor favorita?");
  const cor3 = prompt("Qual sua 3ª cor favorita?"); 
  
  console.log([cor1, cor2, cor3]);

};

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}
 
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso; 

};

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;

};

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

};

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];

};


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return array.reverse();

};


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();

};


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em qual ano estamos?");
  const anoNasc = prompt("Qual sua data de nascimento?");
  const anoRg  = prompt("Em qual ano seu RG foi emitido?");
  
  let idadeP  =  anoAtual - anoNasc;
  let idadeRg = anoAtual - anoRg;
  
  console.log(idadeP >= "20" &&  idadeP <= "50" && !(idadeRg >= "10") && !(idadeRg >= "15"));

};





// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}