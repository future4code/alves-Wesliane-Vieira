/* Interpretação de código 
1- a) 10
      50
    
    b) Não apareceria nada no console. 

2- a) Essa função imprime na tela o texto pedido ao usuário, todo em letras minúsculas. Se o texto tiver a palavra cenoura aparecerá true, se não tiver aparecerá false.

b) i.   true
   ii.  true
   iii. true
*/

// Escrita de código

// 1- a)
function aboutMe() {
    return "Eu sou Wesliane, tenho 25 anos, moro em Belo Horizonte e sou estudante.";

};

console.log(aboutMe());

// b)
function aboutMe2(nome, idade, cidade, profissão) {
    return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissão}.`;
};

console.log(aboutMe2("Wesliane", 25, "Belo Horizonte", "estudante"));

// 2- a)
function sum(num1, num2) {
    return num1 + num2;

};

sum(14,14);
console.log(sum(14,14));

// b)
function fun2(num1, num2) {
    return num1 >= num2;

};

console.log(fun2(30, 25));

// c)9
function fun3(num) {
    return num % 2 === 0;

};

console.log(fun3(100));

// d)
function mod1(msg) {
    return msg.toUpperCase();
    
};

function mod2(msg) {
    return msg.length;

};

console.log(mod1("Menssagem modificada"));
console.log(mod2("Menssagem modificada"));

// 3
function soma(num1, num2) {
    return num1 + num2;

};

function sub(num1, num2) {
    return num1 - num2;

};

function div(num1, num2) {
    return num1 / num2;

};

function mult(num1, num2) {
    return num1 * num2;

};

console.log(prompt("Insira um número"));
console.log(prompt("Insira outro número"));

soma(30, 3);
sub(30, 3);
div(30, 3);
mult(30, 3);

console.log(soma(30,3));
console.log(sub(30,3));
console.log(div(30,3));
console.log(mult(30,3));











