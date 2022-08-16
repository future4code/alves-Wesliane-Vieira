/* 1 - A) Gera o erro: Tipo 'número' não é atibuível ao tipo 'string'.  */

const minhaString: string = 10

// B) Utilizando o tipo, Union Type.

let meuNumero: number | string= 10
meuNumero = "10"

// C) Utilzando o tipo, Aliases Type.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

const wesliane = {
    nome: 'Wesliane',
    idade: 25,
    corFavorita: 'preto'
}

const miria = {
    nome: 'Miriã',
    idade: 30,
    corFavorita: 'verde'
}

const camila = {
    nome: 'Camila',
    idade: 25,
    corFavorita: 'amarelo'
}

// D)

enum coresArcoIris  {
    VERMELO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    AZULESCURO = 'Azul-escuro',
    VIOLETA = 'Violeta'
}



