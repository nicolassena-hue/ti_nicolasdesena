// ex1
// Se a linha <link rel="stylesheet" href="styles.css"> for apagada, a página continua funcionando funcionalmente, porém o HTML é exibido completamente sem estilos ("pelado"): sem cores de fundo, sem formatação de fonte, sem bordas nos cartões e com todos os elementos desalinhados em preto e branco[cite: 11, 15].


// ex2
// Não, o defer não era desnecessário[cite: 15]. Como o script do colega foi colocado no final do <body>, o navegador já havia carregado todo o HTML antes de executar o código JavaScript, permitindo encontrar os botões[cite: 11, 15]. O atributo defer serve para garantir que o script só seja executado após a montagem completa do HTML, independentemente de onde a tag <script> esteja posicionada no arquivo (por exemplo, dentro do <head>)[cite: 11, 15].


// ex3
/*
:root {
    --cor-urgente: #C00000;
}

.cartao-urgente {
    border: 3px solid var(--cor-urgente);
}

.titulo-urgente {
    color: var(--cor-urgente);
}
*/


// ex4
// Separei a página nos arquivos index.html, styles.css e script.js[cite: 12, 14]. Para ter certeza de que tudo continuou funcionando, conferi no navegador se a página manteve a estilização visual (confirmando a leitura do styles.css), testei o clique de apoio nos botões e verifiquei a navegação por teclado com a tecla Tab (confirmando a leitura do script.js e dos estilos de foco)[cite: 11, 14, 15].


// ex5
// Nomes de variáveis CSS escolhidos e justificativas[cite: 12, 14, 15]:
// 1. --cor-principal (#1F4E79): Define a cor de marca do sistema usada nos títulos, bordas e botões principais[cite: 11, 12].
// 2. --cor-hover (#2E75B6): Define a cor de interatividade ao passar o mouse sobre os botões.
// 3. --cor-foco (#C00000): Define a cor do contorno de acessibilidade para navegação via teclado[cite: 13].
// 4. --espaco-padrao (20px): Padroniza o espaçamento do cabeçalho e do contêiner principal[cite: 12].
// Motivo dos nomes: Todos descrevem a função/papel do elemento no sistema, garantindo facilidade de alteração no futuro caso o esquema de cores mude[cite: 12, 15].