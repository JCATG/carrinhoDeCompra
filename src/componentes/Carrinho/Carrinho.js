import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import AppContext from "../../context/AppContext";

function Carrinho() {
  //esse  cart  itens etsa lá no provider
  const { cartItens, isCartVisible, setisCartVisible } = useContext(AppContext);
  
  console.log(cartItens);
  return (
    <button
      className="text-2xl flex items-center relative"
      onClick={() => setisCartVisible(!isCartVisible)}
    >
      <LuShoppingCart />

      {cartItens.length > 0 && (
        <span className="bg-red-500 absolute w-4 h-4 flex items-center justify-center rounded-full mt-0 mb-6 text-sm">
          {cartItens.length}
        </span>
      )}
    </button>
  );
}

export default Carrinho;
