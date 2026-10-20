// ex1
// Os pares que REPROVAM na régua de 4,5:1 de contraste são:
// - #888888 no #FFFFFF (rácio de aprox. 3,95:1) -> Reprova
// - #CCCCCC no #FFFFFF (rácio de aprox. 1,6:1)  -> Reprova


// ex2
// (a) Fila da cantina:
// alt="Fila de alunos na cantina dobrando a esquina do corredor durante o intervalo."
// (b) Logotipo da escola:
// alt="Logotipo do CEEP Pedro Boaretto Neto"
// (c) Listra colorida decorativa:
// alt="" (vazio para que o leitor de ecrã ignore a imagem decorativa)


// ex3
// Porquê: O código altera apenas a cor do botão (backgroundColor = "green"). Isso viola a regra "Cor nunca sozinha", impedindo que pessoas com daltonismo ou utilizadores de leitores de ecrã percebam a alteração de estado.
// Correção:
botao.addEventListener("click", function() {
    botao.style.backgroundColor = "green";
    botao.textContent = "Apoiado"; // Transmite a informação também por texto
});


// ex4
// 1. Cabeçalho: Adicionada a tag <p> abaixo do <h1> com o texto explicativo da página.
// 2. Foco: Inserida a regra CSS .apoiar:focus { outline: 3px solid #C00000; outline-offset: 2px; }.
// 3. Estado escrito: Mantido o código JS que altera o texto de "Apoiar" para "Apoiado" e atualiza a contagem.


// ex5
// Tabela de Auditoria do Radar:
// Item 1 (Muda algo além da cor?): Sim
// Item 2 (Dá para saber se já apoiou só de olhar?): Sim (pelo texto do botão)
// Item 3 (Imagens com alt?): Sim (não há imagens atualmente)
// Item 4 (Texto legível ao apertar os olhos?): Sim
// Item 5 (Navegação por Tab chega aos botões?): Sim
// Item 6 (Dá para apoiar apertando Enter?): Sim
// Item 7 (Contorno de foco visível?): Sim
// Item 8 (Compreensível em 5 segundos por um estranho?): Sim

// Ordem de Melhorias Priorizadas (Critério: Maior Impacto x Menor Esforço):
// 1º Adicionar atributo alt nas futuras imagens do cartão (Acessibilidade - Alto impacto para leitores de ecrã, esforço mínimo).
// 2º Destacar os cartões já apoiados com uma cor de borda diferente (Usabilidade - Alto impacto para confirmação visual rápida, baixo esforço no JS/CSS).
// 3º Adicionar ordenação dos cartões pelos mais apoiados (Usabilidade - Alto impacto na visualização das prioridades da escola, médio/alto esforço no código).
// Explicação da ordem: Começou-se pelas correções de acessibilidade e de baixo esforço que beneficiam diretamente todos os utilizadores antes de avançar para funcionalidades complexas de reordenação.