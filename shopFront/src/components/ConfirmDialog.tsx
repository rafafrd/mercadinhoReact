type ConfirmDialogProps = {
  // Nome do item exibido na pergunta de confirmação.
  // Pode ser undefined se o item não for encontrado (caso de borda defensivo).
  itemNome: string | undefined;
  onConfirm: () => void;
  onCancel: () => void;
};

/**
 * Conteúdo do modal de confirmação de remoção.
 * Separado do Modal para que o Modal permaneça genérico
 * e este componente cuide apenas da lógica visual de confirmar/cancelar.
 */
export default function ConfirmDialog({ itemNome, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <>
      <p className="confirm-text">
        Remover <strong>{itemNome}</strong> da lista?
      </p>
      <div className="confirm-actions">
        {/* Ação segura primeiro — o Tab leva ao Cancelar antes do Remover */}
        <button className="btn-cancelar" onClick={onCancel}>
          Cancelar
        </button>
        <button className="btn-confirmar-remover" onClick={onConfirm}>
          Remover
        </button>
      </div>
    </>
  );
}
