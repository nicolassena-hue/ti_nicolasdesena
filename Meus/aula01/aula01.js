// ex1
let visto = false; // Cria a variável booleana guardando o valor falso[cite: 1, 4]


// ex2
// 5 === 5    -> true  (números e valores iguais)[cite: 2, 4]
// "5" === 5  -> false (um é texto e o outro é número)[cite: 2, 4]
// "5" == 5   -> true  (o == converte os tipos antes de comparar)[cite: 2, 4]
// true === false -> false (valores booleanos diferentes)[cite: 2, 4]


// ex3
// Motivo: A variável 'apoiado' foi declarada fora do forEach, existindo apenas uma única variável compartilhada entre todos os cartões. Assim, ao apoiar um cartão, todos os outros acham que também foram apoiados[cite: 2, 4].
// Correção: Mover a variável 'let apoiado = false;' para DENTRO do forEach[cite: 2, 4]:
/*
document.querySelectorAll(".apoiar").forEach(function(botao) {
    let apoiado = false; // Declarada dentro para cada cartão ter a sua própria variável[cite: 2]
    botao.addEventListener("click", function() {
        // código do evento...
    });
});
*/


// ex4
if (apoiado === false) {
    botao.textContent = "Apoiado";
} else {
    botao.textContent = "Apoiar"; // Preenche com "Apoiar" ao retirar o apoio[cite: 3, 4]
}


// ex5
// No index.html, foi adicionado o seguinte código dentro do <main>[cite: 4]:
/*
<div class="cartao">
    <h2>Ventilador da sala 04</h2>
    <p>O ventilador faz muito barulho e não roda na velocidade máxima.</p>
    <p>Apoios: <span class="contagem">0</span></p>
    <button class="apoiar">Apoiar</button>
</div>
*/


// ex6
// Alteração necessária: Para o cartão que nasce apoiado, inicializaríamos a variável 'apoiado' com valor 'true' (ex: let apoiado = botao.textContent === "Apoiado";)[cite: 1, 4].
// Por que não serve para os outros cartões: Se colocarmos 'let apoiado = true;' diretamente dentro do forEach, TODOS os cartões da página nasceriam achando que já foram apoiados. Ao dar o primeiro clique em um cartão com contagem 0, ele tentaria retirar um apoio (diminuindo o contador e mudando o texto para Apoiar) em vez de somar[cite: 2, 4].