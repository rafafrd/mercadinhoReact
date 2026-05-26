import React from 'react';
import { mockShoppingList } from '../db/seed';
import type { ShoppingItem } from '../db/seed';

/**
 * Hook central do app — encapsula todo o estado e as operações da lista.
 *
 * Responsabilidades:
 *   - Armazenar a lista de itens (inicializada com dados do seed)
 *   - Controlar a visibilidade do modal de adição
 *   - Controlar qual item está aguardando confirmação de remoção
 *   - Expor funções para adicionar, confirmar remoção e cancelar
 *
 * O App.tsx não precisa conhecer nenhum detalhe de implementação —
 * ele apenas consome o que este hook exporta.
 */
export function useShoppingList() {
  // Lista de compras — começa com os dados mockados do seed para
  // o usuário ver a interface preenchida ao abrir o app pela primeira vez.
  const [shoppingList, setShoppingList] = React.useState<ShoppingItem[]>(mockShoppingList);

  // Controla se o modal de adição de item está aberto.
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  // Guarda o ID do item aguardando confirmação de remoção.
  // null significa que nenhum modal de confirmação está ativo.
  const [confirmId, setConfirmId] = React.useState<string | null>(null);

  /**
   * Cria um novo item com ID único e o insere no final da lista.
   * Usa Date.now() como ID para garantir unicidade mesmo ao adicionar
   * dois itens com o mesmo nome em sequência rápida.
   * Fecha o modal de adição ao terminar.
   */
  const adicionarItem = (nome: string, quantidade: number, preco: number) => {
    const novoItem: ShoppingItem = {
      id: Date.now().toString(),
      nome,
      quantidade,
      preco,
    };
    // Padrão funcional (prev =>) evita ler estado desatualizado em
    // cliques muito rápidos e consecutivos no botão.
    setShoppingList(prev => [...prev, novoItem]);
    setIsFormOpen(false);
  };

  /**
   * Marca um item como "candidato à remoção", abrindo o modal de confirmação.
   * A remoção real só acontece se o usuário confirmar em removerItem().
   */
  const confirmarRemover = (id: string) => {
    setConfirmId(id);
  };

  /**
   * Executa a remoção do item cujo ID está em confirmId.
   * Usa .filter() para retornar uma nova lista sem o item, preservando
   * todos os outros — incluindo os de mesmo nome (que têm IDs distintos).
   */
  const removerItem = () => {
    if (!confirmId) return;
    setShoppingList(prev => prev.filter(item => item.id !== confirmId));
    setConfirmId(null);
  };

  /** Fecha o modal de confirmação sem remover nada. */
  const cancelarRemocao = () => setConfirmId(null);

  // Derivado do estado — encontra o objeto completo do item que está
  // aguardando confirmação, para exibir o nome no modal de remoção.
  const itemParaRemover = shoppingList.find(item => item.id === confirmId);

  return {
    shoppingList,
    isFormOpen,
    setIsFormOpen,
    confirmId,
    itemParaRemover,
    adicionarItem,
    confirmarRemover,
    removerItem,
    cancelarRemocao,
  };
}
