import type { ShoppingItem } from '../db/seed'

type ShoppingListProps = {
  items: ShoppingItem[];
  onRemove: (id: string) => void;
};

// Formata número para moeda brasileira — ex: 24.9 → "R$ 24,90"
function formatarPreco(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ShoppingList({ items, onRemove }: ShoppingListProps) {
  // Total geral da lista: soma de (preco × quantidade) de cada item
  const totalGeral = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="list-container">
      <h2 className="list-title">Lista de Compras</h2>
      {items.length === 0 ? (
        <p className="lista-vazia">Sua lista está vazia!</p>
      ) : (
        <>
          <ul className="lista">
            {items.map((item) => (
              <li key={item.id} className="list-item">
                <span className="item-nome">{item.nome}</span>
                <span className="item-detalhes">
                  <span className="item-quantidade">Qtd: {item.quantidade}</span>
                  {/* Preço unitário e subtotal por item */}
                  <span className="item-preco">{formatarPreco(item.preco)} un.</span>
                  <span className="item-subtotal">{formatarPreco(item.preco * item.quantidade)}</span>
                </span>
                <button
                  className="btn-remover"
                  onClick={() => onRemove(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          {/* Rodapé com o valor total da compra */}
          <div className="lista-total">
            <span>Total</span>
            <span className="lista-total-valor">{formatarPreco(totalGeral)}</span>
          </div>
        </>
      )}
    </div>
  );
}
