# Aplicativo de Lista de Compras (React)

## 1. Visão Geral do Projeto

O objetivo deste projeto é criar um aplicativo web de **Lista de Compras** utilizando React. A aplicação deve permitir que o usuário adicione itens (com nome e quantidade) e remova-os individualmente. A interface deve reagir instantaneamente a essas ações sem a necessidade de recarregar a página.

---

## 2. Requisitos Funcionais (O que a aplicação faz)

- **RF01 - Cadastro de Item:** O usuário deve conseguir digitar o nome do produto e a quantidade em campos de texto (inputs).
- **RF02 - Adicionar à Lista:** Ao clicar no botão "Adicionar", o item deve aparecer imediatamente na lista abaixo.
- **RF03 - Limpeza de Campos:** Após adicionar o item, os campos de texto devem ser limpos automaticamente.
- **RF04 - Visualização:** A lista deve exibir claramente o nome, a quantidade e um botão de exclusão para cada item.
- **RF05 - Remoção de Item:** Ao clicar no botão de remoção de um item específico, ele deve sumir da lista instantaneamente.

---

## 3. Requisitos Visuais e Design (Como a aplicação se parece)

- **Organização:** Divisão clara entre a área do formulário (onde adiciona) e a área da lista (onde visualiza).
- **Espaçamento:** Uso correto de margens (`margin`) e preenchimentos (`padding`) para que os elementos não fiquem colados.
- **Destaque Visual:** O botão de "Adicionar" deve ter uma cor e estilo diferentes do botão de "Remover".
- **Identificação de Itens:** Cada item dentro da lista deve ser visualmente separado dos outros (usando bordas, cores de fundo alternadas ou sombras).

---

## 4. Cronograma de Desenvolvimento (Dividido em 3 Fases)

### Fase 1: Estrutura Visual e Estilização (O "Corpo" do App)

> **Foco:** Criar a interface visual estática utilizando HTML/JSX e CSS, deixando o app bonito antes de colocar a lógica.

- [ ] **Task 1.1: Inicialização do Projeto**
- Criar o projeto React utilizando uma ferramenta moderna (como o Vite).
- Limpar os arquivos padrão que não serão usados (`App.css`, logos, etc.).

- [ ] **Task 1.2: Construção da Estrutura (JSX)**
- Criar a estrutura do formulário: um campo para o _Nome do Produto_, um campo para a _Quantidade_ e um botão para _Adicionar_.
- Criar a estrutura da lista: uma área container e uma simulação de item com _Nome_, _Quantidade_ e um botão _Remover_ (apenas para ver como fica na tela).

- [ ] **Task 1.3: Estilização e Layout (CSS)**
- Criar um arquivo CSS externo (ou usar CSS Modules) para estilizar o app.
- Aplicar propriedades de espaçamento (`margin` e `padding`) para organizar o layout.
- Garantir que o formulário e a lista estejam visualmente separados.
- Diferenciar o botão de adicionar (ex: verde) do botão de remover (ex: vermelho).
- Adicionar uma borda ou fundo diferenciado para cada item da lista para que eles não se misturem visualmente.

---

### Fase 2: Captura de Dados e Estado da Lista (O "Cérebro" do App)

> **Foco:** Fazer o React entender o que o usuário digita e preparar o aplicativo para armazenar os itens na memória do navegador.

- [ ] **Task 2.1: Controlar as Entradas de Texto (Inputs)**
- _Explicação:_ O React precisa saber exatamente o que está escrito nos inputs a cada segundo.
- Criar duas variáveis de estado (`useState`) para os inputs: uma para o nome do produto e outra para a quantidade.
- Vincular a propriedade `value` dos inputs a essas variáveis.
- Utilizar o evento `onChange` em ambos os inputs para atualizar essas variáveis em tempo real enquanto o usuário digita.

- [ ] **Task 2.2: Criar o Estado da Lista de Compras**
- Criar uma variável de estado (`useState`) que começará como uma lista vazia (um array: `[]`). Ela será responsável por guardar todos os produtos adicionados.

- [ ] **Task 2.3: Renderização Dinâmica com `.map()**`
- Substituir os itens estáticos da Fase 1 por uma renderização dinâmica.
- Utilizar a função `.map()` para ler a variável de estado da lista e transformar cada dado ali dentro em um elemento visual na tela (exibindo nome e quantidade). _Dica: Lembre-se de adicionar a propriedade `key` única para cada item._

---

### Fase 3: Ações de Adicionar, Remover e Entrega (O "Movimento" do App)

> **Foco:** Implementar as funções de clique para colocar novos produtos na lista, apagar itens e enviar o projeto final.

- [ ] **Task 3.1: Implementar a Função de Adicionar**
- Criar uma função chamada `adicionarItem` (ou similar) que é disparada no evento de clique (`onClick`) do botão de adicionar.
- Esta função deve criar um novo objeto com um ID único, o nome e a quantidade digitados, e inseri-lo na lista utilizando o modificador do estado (sempre criando uma lista nova, ex: `[...listaAntiga, novoItem]`).
- Ao final da função, resetar as variáveis dos inputs para o valor inicial (vazio), limpando os campos automaticamente na tela.

- [ ] **Task 3.2: Implementar a Função de Remover**
- Criar uma função chamada `removerItem` que recebe o ID do item que deve ser apagado.
- Vincular essa função ao evento de clique (`onClick`) do botão de remoção de cada item da lista.
- Utilizar o método `.filter()` do JavaScript para criar uma nova lista sem o item removido e atualizar o estado da aplicação. A interface irá atualizar sozinha automaticamente.

- [ ] **Task 3.3: Revisão do Código e Entrega**
- Revisar se o código está bem estruturado e limpo.
- Verificar se todos os critérios visuais e técnicos foram cumpridos.
- Criar um repositório no GitHub, fazer o commit do código e enviar o link para avaliação.

---

## 5. Critérios de Sucesso (Checklist de Avaliação)

| Critério Técnico           | Descrição Simples                                                         | Status |
| -------------------------- | ------------------------------------------------------------------------- | ------ |
| **Gerenciamento de Dados** | Utilizou o hook `useState` para a lista e para os inputs?                 | [ ]    |
| **Captura de Texto**       | Os inputs utilizam `onChange` para ler o que é digitado?                  | [ ]    |
| **Ação de Adicionar**      | O botão de adicionar usa um evento de clique (`onClick`) funcional?       | [ ]    |
| **Exibição Dinâmica**      | A lista é mostrada na tela através do método `.map()`?                    | [ ]    |
| **Ação de Remover**        | Itens são removidos individualmente atualizando o estado?                 | [ ]    |
| **Campos Limpos**          | Os inputs ficam em branco logo após o usuário adicionar um item?          | [ ]    |
| **Organização do CSS**     | O estilo está em um arquivo separado ou formato aceito (Modules/Styled)?  | [ ]    |
| **Contraste de Botões**    | O botão de adicionar e o de remover possuem cores/estilos bem diferentes? | [ ]    |
| **Espaçamentos**           | Foi aplicado `margin` ou `padding` para o layout não ficar espremido?     | [ ]    |
| **Diferenciação de Itens** | Cada item da lista possui uma borda ou fundo que o separa dos outros?     | [ ]    |
