// Schema do item de compra — preco é o valor unitário em reais
export interface ShoppingItem {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
}

// Dados iniciais para popular o app no primeiro carregamento
export const mockShoppingList: ShoppingItem[] = [
  { id: "1",  nome: "Arroz Branco Tio João 5kg",    quantidade: 1, preco: 24.90 },
  { id: "2",  nome: "Feijão Carioca tipo 1",         quantidade: 2, preco: 8.50  },
  { id: "3",  nome: "Leite Desnatado 1L",            quantidade: 6, preco: 4.75  },
  { id: "4",  nome: "Café Torrado e Moído 500g",     quantidade: 2, preco: 15.30 },
  { id: "5",  nome: "Detergente Neutro",             quantidade: 3, preco: 2.99  },
  { id: "6",  nome: "Sabão em Pó 1kg",               quantidade: 1, preco: 11.80 },
  { id: "7",  nome: "Papel Higiênico 12 rolos",      quantidade: 1, preco: 19.90 },
  { id: "8",  nome: "Shampoo Ideal 250ml",           quantidade: 2, preco: 13.45 },
  { id: "9",  nome: "Condicionador Ideal 250ml",     quantidade: 2, preco: 13.45 },
  { id: "10", nome: "Perfume Ideal 100ml",           quantidade: 1, preco: 89.90 },
];
