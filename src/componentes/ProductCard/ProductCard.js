import React, { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import PropTypes from "prop-types";
import Cost from "../../util/cost";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {
  const { title, price, thumbnail } = data;

  const { cartItens, setCartItens } = useContext(AppContext);


  //adiciona os itens no carrinho 
  const handleAddCart = () => {
    const updatedCartItems = [...cartItens, data];

    // Atualizar o estado com o novo array
    setCartItens(updatedCartItems);
  };

  return (
    <section className="flex flex-col w-full bg-white cursor-pointer mx-auto max-w-xs px-4 py-4">
      <div className="">
        <img
          src={thumbnail.replace(/-I\.jpg$/, "-W.jpg")}
          alt="product"
          className="mx-0 ml-0"
        />
      </div>
      <div className="">
        <p>{title}</p>
        <h2 className="text-3xl mt-2">{Cost(price, "BRL")}</h2>
        <button
          className="border text-center flex justify-center mx-auto mt-8 cursor-pointer"
          onClick={handleAddCart}
        >
          <IoIosAdd className="text-3xl hover:bg-mygray" />
        </button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProductCard;
