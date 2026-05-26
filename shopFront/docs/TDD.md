# Test-Driven Development (TDD) para o Aplicativo de Lista de Compras

### 1. Testes de Validação nos Campos (Onde a maioria dos bugs nasce)

- [ ] **O teste do "Vazio":** Tente clicar no botão de adicionar sem digitar nada em nenhum dos campos.
- _O que não pode acontecer:_ O app adicionar um item "fantasma" (uma linha em branco na lista).

- [ ] **O teste da Quantidade Zero ou Negativa:** Tente adicionar um produto com a quantidade `0`, `-5` ou `-1`.
- _O que não pode acontecer:_ O sistema aceitar quantidades que não fazem sentido para uma compra.

- [ ] **O teste do Espaço em Branco:** Digite apenas espaços (apertando a barra de espaço) no nome do produto e tente adicionar.
- _O que não pode acontecer:_ O app aceitar o item como se ele tivesse um nome válido.

- [ ] **O teste do Texto na Quantidade:** Se o campo de quantidade permitir, tente digitar letras (ex: "duas") em vez de números.
- _O que não pode acontecer:_ O sistema aceitar ou exibir `NaN` (Not a Number) na tela.

---

### 2. Testes de Comportamento da Lista (Ciclo de vida dos dados)

- [ ] **O teste do Item Duplicado:** Adicione "Arroz" (Qtd: 1) e logo em seguida adicione "Arroz" (Qtd: 1) novamente.
- _O que verificar:_ O app deve permitir ou somar. Se você tentar remover um deles, **apenas um** deve sumir. Se os dois sumirem ao mesmo tempo, significa que eles estão compartilhando o mesmo ID na lógica interna do React (um bug clássico).

- [ ] **O teste de Remoção em Cadeia:** Adicione 3 itens diferentes (ex: A, B e C). Remova o item do meio (B).
- _O que verificar:_ O item B deve sumir, e os itens A e C devem continuar intocados em suas posições corretas.

- [ ] **O teste do Botão "Cliquenildo":** Clique muito rápido, várias vezes seguidas, no botão de adicionar.
- _O que não pode acontecer:_ O app travar, duplicar requisições ou renderizar itens quebrados.

---

### 3. Testes de Layout e Quebra de Interface (Visual e UX)

- [ ] **O teste do Nome Gigante:** Tente adicionar um produto com um nome extremamente longo (ex: um texto de 3 parágrafos ou uma palavra sem espaços com 50 letras).
- _O que verificar:_ O texto vai quebrar a linha bonitinho ou vai estourar para fora da tela, empurrando o botão de remover para onde ele não deveria estar?

- [ ] **O teste do "Dedão" (Mobile):** Abra o aplicativo no celular ou simule a tela de um celular no navegador.
- _O que verificar:_ Os botões de adicionar e remover são fáceis de clicar com o polegar? Eles estão muito colados um no outro?

- [ ] **O teste de Contraste:** Olhe para o botão de adicionar e o de remover.
- _O que verificar:_ Está visualmente óbvio qual botão coloca e qual botão apaga o item, mesmo para alguém que olhe de longe?

---

### 4. Testes de Estado (Comportamento do React)

- [ ] **O teste da Limpeza de Campos:** Adicione um item com sucesso.
- _O que verificar:_ O cursor do teclado continua piscando no input ou os campos simplesmente limparam? O usuário precisa apagar manualmente o que digitou antes para colocar o próximo item? (O ideal é limpar sozinho).

- [ ] **O teste da Lista Vazia:** Apague todos os itens da lista até não sobrar nenhum.
- _O que verificar:_ A tela fica com um buraco branco estranho ou exibe uma mensagem amigável como "Sua lista está vazia!"?
