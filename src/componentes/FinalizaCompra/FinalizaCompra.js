import React from "react";

function FinalizaCompra(props){
      const { formPagamento, numeroParcelas, valorTotal } =
        props.location.state;

    return (
      <div>
        <div>
          <h2>Resumo da Compra</h2>
          <p>Forma de Pagamento: {formPagamento}</p>
          {formPagamento === "cartao" && <p>Parcelas: {numeroParcelas}</p>}
          <p>Valor Total: {valorTotal}</p>
        </div>
      </div>
    );
}

export default FinalizaCompra;