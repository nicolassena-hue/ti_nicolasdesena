// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
let visto= false

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5 True
//   "5" === 5 False
//   "5" == 5 True
//   true === false  false


// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
//A variável apoiado foi declarada fora do loop (escopo global/externo), então todos os botões compartilham o mesmo estado. Quando um botão altera o valor de apoiado, afeta o comportamento de todos os outros.
document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false;
  botao.addEventListener("click", function() {
    // ...
  });
});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }
if (apoiado === false) {
  botao.textContent = "Apoiado";
} else {
  botao.textContent = "Apoiar";
}


// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
//adicionei la ja 


// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
//O que mudar: Para este cartão específico, a variável apoiado deve iniciar como true (ex: let apoiado = true;).
// Por que não serve para os outros: Os outros cartões começam desapoiados. Se todos começassem com apoiado = true, o primeiro clique neles decrementaria a contagem e mudaria o texto para "Apoiar", invertendo a lógica de funcionamento inicial.