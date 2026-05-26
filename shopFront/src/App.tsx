import './App.css'
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import Modal from './components/Modal'
import ConfirmDialog from './components/ConfirmDialog'
import { useShoppingList } from './hooks/useShoppingList'

/**
 * Raiz do app — responsável apenas por composição.
 * Toda a lógica de estado vive em useShoppingList;
 * este componente só conecta os pedaços visuais.
 */
function App() {
  const {
    shoppingList,
    isFormOpen,
    setIsFormOpen,
    confirmId,
    itemParaRemover,
    adicionarItem,
    confirmarRemover,
    removerItem,
    cancelarRemocao,
  } = useShoppingList();

  return (
    <div className="app">
      <h1 className="app-title">Mercadinho</h1>

      {/* Abre o modal de adição */}
      <button className="btn-abrir-form" onClick={() => setIsFormOpen(true)}>
        + Adicionar Item
      </button>

      {/* Lista de itens — ao clicar em Remover, abre o modal de confirmação */}
      <ShoppingList items={shoppingList} onRemove={confirmarRemover} />

      {/* Modal: formulário para adicionar novo item */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Adicionar Produto"
      >
        <ShoppingForm onAdd={adicionarItem} />
      </Modal>

      {/* Modal: confirmação antes de remover — só destrói se o usuário confirmar */}
      <Modal
        isOpen={confirmId !== null}
        onClose={cancelarRemocao}
        title="Remover Item"
      >
        <ConfirmDialog
          itemNome={itemParaRemover?.nome}
          onConfirm={removerItem}
          onCancel={cancelarRemocao}
        />
      </Modal>
    </div>
  );
}

export default App
