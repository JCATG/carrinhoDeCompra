import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import Cost from "../../util/cost";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function ItemCard({ data }) {
  const { id, title, price, thumbnail } = data;
  const { cartItens, setCartItens, setisCartVisible } = useContext(AppContext);

  const handleRemoveItem = () => {
    const itemIndex = cartItens.findIndex((item) => item.id === id);
    const updatedCartItems = [...cartItens];

    //verifica se o item existe no carrinho e se for maior que um reduz se for igual a um remove 
    if (itemIndex !== -1) {
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(itemIndex, 1);
      }
      setCartItens(updatedCartItems);
    }
  };
  return (
    <div className="flex items-start border-b pb-4 gap-4">
      <img src={thumbnail} alt="Imagem do produto" />
      <div>
        <h3 className="text-transparente mb-2">{title}</h3>
        <p className="font-medium text-2xl">{Cost(price, "BRL")}</p>
      </div>
      <button className="text-2xl text-red-500" onClick={handleRemoveItem}>
        <CiCircleRemove />
      </button>
    </div>
  )
}
export default ItemCard;
