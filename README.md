# Mercadinho — Lista de Compras em React

> Projeto de treinamento em React desenvolvido no 3º semestre do curso.  
> O objetivo é praticar os fundamentos da biblioteca: estado, props, eventos, renderização dinâmica e componentização.

---

## Sobre o projeto

O **Mercadinho** é um aplicativo web de lista de compras construído com React + TypeScript + Vite. Ele permite adicionar produtos (nome, quantidade e preço), visualizar a lista com subtotais e total geral, e remover itens com confirmação.

O projeto foi desenvolvido em fases, seguindo um cronograma de aprendizado que avança do visual estático até a lógica completa de estado.

---

## Conceitos de React praticados

| Conceito | Onde foi aplicado |
|---|---|
| `useState` | Estado da lista, inputs do formulário, controle de modais |
| `props` | Comunicação entre `App → ShoppingList → ConfirmDialog` |
| Lifting State Up | Estado da lista centralizado no `useShoppingList` e distribuído via props |
| `useEffect` | Listener de teclado (Esc) no componente `Modal` |
| Custom Hook | `useShoppingList` encapsula toda a lógica de estado |
| Renderização condicional | Lista vazia, mensagem de erro, exibição do modal |
| `.map()` com `key` | Renderização dinâmica dos itens da lista |
| `.filter()` | Remoção de itens sem mutar o estado diretamente |
| Spread operator | `[...prev, novoItem]` para criar nova lista imutável |

---

## Stack

- **React 19** — biblioteca de UI
- **TypeScript 6** — tipagem estática
- **Vite 8** — bundler e servidor de desenvolvimento
- **CSS puro** — estilização em `App.css` com variáveis CSS

---

## Arquitetura de componentes

```mermaid
graph TD
    App["App.tsx\n(composição + orquestração)"]

    App --> BtnAbrirForm["button.btn-abrir-form\n+ Adicionar Item"]
    App --> ShoppingList["ShoppingList\n(lista de itens)"]
    App --> ModalForm["Modal\n(formulário)"]
    App --> ModalConfirm["Modal\n(confirmação)"]

    ModalForm --> ShoppingForm["ShoppingForm\n(inputs + validação)"]
    ModalConfirm --> ConfirmDialog["ConfirmDialog\n(cancelar / confirmar)"]

    ShoppingList --> ListItem["li.list-item\n(nome · qtd · preço · btn-remover)"]
```

---

## Fluxo de estado

```mermaid
flowchart LR
    seed["db/seed.ts\nmockShoppingList"]
    hook["useShoppingList\n(custom hook)"]
    form["ShoppingForm"]
    list["ShoppingList"]
    confirm["ConfirmDialog"]

    seed -->|"estado inicial"| hook
    hook -->|"shoppingList, isFormOpen"| form
    hook -->|"shoppingList"| list
    hook -->|"itemParaRemover"| confirm

    form -->|"onAdd(nome, qtd, preço)"| hook
    list -->|"onRemove(id)"| hook
    confirm -->|"onConfirm()"| hook
    confirm -->|"onCancel()"| hook

    hook -->|"setShoppingList"| hook
```

---

## Fluxo de interação — Adicionar item

```mermaid
sequenceDiagram
    actor U as Usuário
    participant B as Botão "+ Adicionar Item"
    participant M as Modal
    participant F as ShoppingForm
    participant H as useShoppingList

    U->>B: clica
    B->>M: isFormOpen = true
    M-->>U: modal abre (animação slideUp)
    U->>F: preenche nome, quantidade, preço
    U->>F: clica "Adicionar"
    F->>F: valida campos
    alt campos inválidos
        F-->>U: exibe mensagem de erro em vermelho
    else campos válidos
        F->>H: onAdd(nome, qtd, preço)
        H->>H: cria item com ID único (Date.now())
        H->>H: setShoppingList([...prev, novoItem])
        H->>M: isFormOpen = false
        M-->>U: modal fecha
        F->>F: limpa inputs
    end
```

---

## Fluxo de interação — Remover item

```mermaid
sequenceDiagram
    actor U as Usuário
    participant L as ShoppingList
    participant H as useShoppingList
    participant M as Modal (confirmação)
    participant C as ConfirmDialog

    U->>L: clica "Remover" no item X
    L->>H: confirmarRemover(id)
    H->>H: confirmId = id
    H->>M: isOpen = true
    M-->>U: modal abre com nome do item
    alt Usuário cancela
        U->>C: clica "Cancelar"
        C->>H: cancelarRemocao()
        H->>H: confirmId = null
        M-->>U: modal fecha, item intocado
    else Usuário confirma
        U->>C: clica "Remover"
        C->>H: removerItem()
        H->>H: filter(item => item.id !== confirmId)
        H->>H: confirmId = null
        M-->>U: modal fecha, item removido da lista
    end
```

---

## Validações do formulário

```mermaid
flowchart TD
    A([Clique em Adicionar]) --> B{nome está vazio\nou só espaços?}
    B -- sim --> E1[Erro: nome não pode estar vazio]
    B -- não --> C{quantidade é zero,\nnegativa ou NaN?}
    C -- sim --> E2[Erro: quantidade deve ser maior que zero]
    C -- não --> D{preço é zero,\nnegativo ou NaN?}
    D -- sim --> E3[Erro: preço deve ser maior que zero]
    D -- não --> OK([Item adicionado ✓\nCampos limpos])
```

---

## Estrutura de arquivos

```
shopFront/
├── src/
│   ├── App.tsx                  # Composição — conecta todos os componentes
│   ├── App.css                  # Estilos do app (formulário, lista, modais)
│   ├── main.tsx                 # Ponto de entrada React
│   ├── index.css                # Estilos globais e variáveis CSS
│   ├── hooks/
│   │   └── useShoppingList.ts   # Custom hook — estado e operações da lista
│   ├── components/
│   │   ├── Modal.tsx            # Overlay genérico reutilizável
│   │   ├── ConfirmDialog.tsx    # Conteúdo do modal de confirmação
│   │   ├── ShoppingForm.tsx     # Formulário de adição com validação
│   │   └── ShoppingList.tsx     # Lista dinâmica com subtotais e total
│   └── db/
│       └── seed.ts              # Schema ShoppingItem + dados iniciais
├── docs/
│   ├── atividade.md             # Requisitos e critérios de avaliação
│   └── TDD.md                   # Roteiro de testes manuais
├── PROGRESSION.TXT              # Diário de desenvolvimento detalhado
└── README.md                    # Este arquivo
```

---

## Como rodar

```bash
# Instalar dependências
cd shopFront
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build
```

O app estará disponível em `http://localhost:5173`.

---

## Funcionalidades

- Adicionar produto com nome, quantidade e preço via modal
- Validação de campos com mensagem de erro em tempo real
- Lista dinâmica com preço unitário, subtotal por item e total geral
- Remoção individual com modal de confirmação
- Mensagem "Sua lista está vazia!" quando a lista fica vazia
- Responsivo para dispositivos móveis
- Suporte a tema escuro via variáveis CSS
