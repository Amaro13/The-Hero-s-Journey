"use strict";

const prompt = require(`prompt-sync`)();

///// Projeto 1/////// - A Jornada do Herói
// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.

console.log(
  "Você precisa comprar roupas para sua mulher, sua missão é fazer ela não brigar quando você chegar,\n precisa escolher 4 peças de roupas e ainda responder uma pergunta dela no final, boa sorte!."
);

let contador = 0;
console.log(
  "Você seleciona o vestido que sua mulher gosta e o vendedor mostra dois tamanhos de vestidos um maior e outro do tamanho exato dela."
);
let resp1 = prompt("Você seleciona o vestido maior? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o vestido maior? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você seleciona o sapato que sua mulher gosta e o vendedor mostra dois tamanhos de sapatos um menor e outro do tamanho exato dela."
);
resp1 = prompt("Você seleciona o sapato menor? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o sapato menor? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você pede para ver os brincos e o vendedor mostra dois pares de brincos um mais caro da marca que da inveja nas amigas embora bem feio e outro mais barato mas muito bonito."
);
resp1 = prompt("Você seleciona o brinco feio? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o brinco feio? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você pede para ver a seleção de langerie e o vendedor mostra dois um super sexy e outra confortável que cobre tudo."
);
resp1 = prompt("Você seleciona o sexy? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt("Você seleciona o sexy? Favor selecionar uma das opções(S/N)");
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você chegou em casa e ela experimenta o vestido, quando ela termina de se olhar no espelho te pergunta."
);
resp1 = prompt("Esse vestido me deixa bonita? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Esse vestido me deixa bonita? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}

if (contador == 0) {
  console.log("Você é a maior falha como marido de todos os tempos. Divórcio.");
} else if (contador == 1 || contador == 2) {
  console.log("Prepare-se para uma briga e ajuda com psicólogo de casais.");
} else if (contador == 3) {
  console.log(
    "Pequena briga, mas vendo pelo lado positivo, ainda acaba somente nela, mas nada de nheco-nheco."
  );
} else if (contador == 4) {
  console.log(
    "Foi por pouco e ainda teve uma leve discussão, mas nada que fosse ser uma briga."
  );
} else if (contador == 5) {
  console.log(
    "Se safou por completo, ufa prepare-se para uma baita noite, não esqueceu das camisinhas certo?"
  );
}
