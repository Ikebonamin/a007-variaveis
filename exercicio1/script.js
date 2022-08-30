"strict";
let nome;
let idade;
console.log(typeof nome, idade);
// retornou undefined em ambas, justamente por não possuirem valores iniciais//
let perguntaNome = prompt("Qual seu nome?");
let perguntaIdade = prompt("qual sua idade?");
console.log(typeof (perguntaIdade, perguntaNome));
// retornou no typeof undefined para nome e string para a idade //
console.log(`Olá ${perguntaNome}, você tem ${perguntaIdade} anos!`);
