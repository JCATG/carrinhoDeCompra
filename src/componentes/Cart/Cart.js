import React, { useEffect } from "react";
import styles from "./cart.module.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import Cost from "../../util/cost";
import { Link } from "react-router-dom";



function Cart() {


  const { cartItens, isCartVisible } = useContext(AppContext); // pega os itens do carrinho e renderiza na tela

    if (!cartItens) {
      return <div>Carregando...</div>;
    }
    
    //Soma o valor dos produtos
    const calcularSoma = () => {
      let soma = 0;
      cartItens.forEach((item) => {
        soma += parseFloat(item.price) || 0;
      });
      soma = parseFloat(soma.toFixed(2));
      return soma;
    }; 
  return (
    <section
      className={`${styles.mycart} ${isCartVisible ? styles.mycartactive : ""}`}
    >
      <div>
        {cartItens.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="text-2xl font-bold flex flex-col mt-4">
        <div className="flex text-center justify-center">
          Total:{Cost(calcularSoma(), "BRL")}
        </div>
        {cartItens.length > 0 ? (
          <Link
            to={`/pagamentos?${cartItens
              .map((item) => `id=${encodeURIComponent(item.id)}`)
              .join("&")}`}
          >
            <input
              type="submit"
              value="COMPRAR"
              className="text-md mt-4 bg-yellow-200 py-2 w-full cursor-pointer text-gray-900"
            />
          </Link>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Cart;


//Depois de escoher os os produtos, o usuario tera uma opção de finalizar compra
// Ao clicar sera direcionado para uma pagina com o resumo da compra
// E as opções de compra, opções de pagamento
// se possivel integrar com wocoomerce
