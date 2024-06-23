// Definindo uma variavel. Javascript não precisa colocar o tipo de dado
let nome = "Steve Stranger"
let email = "SteveStanger@gmail.com"
let idade = 35
let logado = true

// Exibindo no console
console.log(nome)
console.log(email)
console.log(idade, logado)

// Como o Js entende o tipo Exibindo o tipo:
console.log(typeof(nome), nome) //Tipo com valor da variavel
console.log(typeof email)
console.log(typeof idade)
console.log(typeof logado)


// Constante e uma variavel que nunca vai ter alterção do valor
// Constante utilizamos o camelCase
const DATA_NASCIMENTO = "19/09/1899"
console.log(DATA_NASCIMENTO);

/* 
Podemos utilizar o var para declara variaveis.
Um dos problemas e que eu posso fazer a redeclaração dessa variavel(Declarar a mesma variavel duas vezes)
Posso exibir uma variavel antes de declarar uma variavel(Vai aparecer Undefined)
*/
var novoNome = "Wade Wilson"
console.log(novoNome, typeof novoNome);

var novoNome = "Logan"
console.log(novoNome);

// Undefined
console.log(poder);
var poder = "Voar"

// Posso alterar o tipo da minha váriavel. Coersão implicita 
nome = 789
idade = false
console.log(typeof nome, nome)
console.log(typeof idade, idade)

// Coersão explicita 
let valorInicial = true
console.log(valorInicial, typeof(valorInicial))

// Convertentdo para String
valorInicial = String(valorInicial)
console.log(valorInicial, typeof(valorInicial))

// Convertendo para Boolean
valorInicial = Boolean(valorInicial)
console.log(valorInicial, typeof(valorInicial))

// Convertendo para Number
let numero = "123456"
console.log(typeof(numero), numero);

// Convertendo para numero
numero = Number(numero)
console.log(typeof(numero), numero);