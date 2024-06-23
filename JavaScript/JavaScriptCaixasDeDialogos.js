/*
Js possui 3 caixas de alerta que podem ser exibida para o usuario
1a Alert(Aparece um alerta na tela)
2a prompt(Armazenar alguma informação)
3a confirm(Quer continuar uma ação ou não)
*/

//Alert
alert("Olá, sou um alerta")

// Prompt 
let mensagem = prompt("Digite seu nome: ")

// Exibir a mensagem
console.log(`Mensagem Digitada ${mensagem}`)

// Confirm
let resposta = confirm("Deseja finalizar o aplicativo")
console.log(resposta)
