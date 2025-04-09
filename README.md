# Projeto de Desenvolvimento Web - Tarefa 6 📚

Este projeto foi desenvolvido para a disciplina **Desenvolvimento Web** e consiste em uma aplicação React com múltiplas funcionalidades interativas. O site inclui uma lista de tarefas (todo-list), um contador de cliques, um jogo da velha, uma calculadora e um buscador de CEP. Para navegação entre as páginas, foi utilizada a biblioteca `react-router-dom`.

**Link do Projeto em Produção:** [https://dev-web-tarefa-6.vercel.app/](https://dev-web-tarefa-6.vercel.app/)

## Funcionalidades

- **Lista de Tarefas (Todo-List):**  
  Adicione, remova e marque tarefas como concluídas.

- **Contador de Cliques:**  
  Um contador simples que incrementa a cada clique no botão.

- **Jogo da Velha:**  
  Implementação clássica do jogo, com alternância de jogadores e indicação de vitória/empate.

- **Calculadora:**  
  Realiza operações básicas (soma, subtração, multiplicação e divisão).

- **Buscador de CEP:**  
  Integração com a API ViaCEP para consultar informações de endereço a partir de um CEP.

## Tecnologias Utilizadas

- **React** para construção da interface e gerenciamento de estado.
- **react-router-dom** para navegação entre páginas.
- **Axios** (ou fetch nativo) para consumo da API ViaCEP no buscador de CEP.
- Estilização com CSS padrão ou módulos CSS.

- O uso do `react-router-dom` permite uma navegação fluida sem recarregamento da página, garantindo uma experiência moderna.
- As fontes escolhidas priorizam a legibilidade e a simplicidade, alinhadas ao propósito acadêmico do projeto.

## Como Executar Localmente

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências

```bash
git install
```

3. Inicie o servidor de desenvolvimento

```bash
npm start
```

4. Acesse http://localhost:3000 no navegador.

## Sobre as Fontes

O projeto utiliza fontes padrão do sistema para garantir desempenho e compatibilidade. Exemplos:

Arial ou sans-serif para textos gerais.

monospace em componentes como a calculadora para melhor legibilidade de números.

Caso queira personalizar as fontes, recomenda-se adicionar fontes externas (ex: Google Fonts) e atualizar os estilos CSS conforme necessário.

## Estrutura do Projeto

```bash
src/
├── components/      # Componentes reutilizáveis (navbar)
├── pages/           # Páginas do site (todo-list, contador, etc.)
├── App.js           # Configuração das rotas
├── index.js         # Ponto de entrada
└── styles/          # Arquivos de estilização
```
