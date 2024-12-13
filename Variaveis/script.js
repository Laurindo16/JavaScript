/*
    Existem 3 tipos de variaveis:
        var
        let
        const
*/

var nome = 'Matheus';
var idade = 22;
var faculdade = true;

console.log(nome, idade, faculdade)

var preco = 5;
var quantidade = 10;
var precoTotal = preco * quantidade;

console.log(precoTotal);

// Podemos criar multiplas variaveis ao mesmo tempo 

var sobrenome = 'Laurindo',
    cidade = 'Tres Coracoes',
    curso = 'Analise e desenvolvimento de sistemas';

console.log(sobrenome, cidade, curso);

// Variaveis podem ser indefinidas 

var semDefinicao;
console.log (semDefinicao);

// Atentar-se para nao criar variveis com nomes reservados: https://www.w3schools.com/js/js_reserved.asp 

// var e let podem ter seus valores alterados, const nao pode ser alterado

var comida = 'pizza',
    comida = 'sushi';

console.log(comida);

//Exercicios

//Declarar uma variavel com seu nome
var nome1 = 'Matheus';

//Declarar uma variavel com sua idade
var idade1 = 22;

// Declarar uma variável com a sua comida favorita e não atribuir valor
var comida1;

// Atribuir valor a sua comida favorita
comida1 = 'Sushi';

// Declarar 5 variáveis diferentes sem valores
var naosei,
    naoseitb,
    testando,
    vixe,
    aleatorio;