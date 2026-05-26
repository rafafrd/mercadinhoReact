import React from "react";

type ShoppingFormProps = {
  onAdd: (nome: string, quantidade: number, preco: number) => void;
};

export default function ShoppingForm({ onAdd }: ShoppingFormProps) {
  const [nome, setNome] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");
  const [preco, setPreco] = React.useState("");

  // Mensagem de erro exibida abaixo dos campos.
  // Limpa automaticamente quando o usuário edita qualquer campo.
  const [erro, setErro] = React.useState("");

  const handleAdicionar = () => {
    const nomeTrimmed = nome.trim();
    const qtd = Number(quantidade);
    const prc = Number(preco);

    // Valida na ordem mais natural para o usuário:
    // nome → quantidade → preço
    if (!nomeTrimmed) {
      setErro("O nome do produto não pode estar vazio.");
      return;
    }
    if (!quantidade || qtd <= 0 || !Number.isFinite(qtd)) {
      setErro("A quantidade deve ser maior que zero.");
      return;
    }
    if (!preco || prc <= 0 || !Number.isFinite(prc)) {
      setErro("O preço deve ser maior que zero.");
      return;
    }

    onAdd(nomeTrimmed, qtd, prc);

    // Limpa tudo após o envio bem-sucedido
    setNome("");
    setQuantidade("");
    setPreco("");
    setErro("");
  };

  // Limpa o erro no momento em que o usuário começa a corrigir qualquer campo
  const limparErro = () => {
    if (erro) setErro("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => { setNome(e.target.value); limparErro(); }}
      />
      <input
        type="number"
        className="form-input"
        placeholder="Quantidade"
        min="1"
        value={quantidade}
        onChange={(e) => { setQuantidade(e.target.value); limparErro(); }}
      />
      <input
        type="number"
        className="form-input"
        placeholder="Preço unitário (R$)"
        min="0.01"
        step="0.01"
        value={preco}
        onChange={(e) => { setPreco(e.target.value); limparErro(); }}
      />

      {/* Exibe a mensagem de erro de validação somente quando há algum erro */}
      {erro && <p className="form-error">{erro}</p>}

      <button className="btn-adicionar" onClick={handleAdicionar}>
        Adicionar
      </button>
    </div>
  );
}
