// provider.js
import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

//contexto
function Provider({ children }) {
  const [produtos, setProducts] = useState([]);  
  const [cartItens, setCartItens] = useState([]);  
  const [isCartVisible, setisCartVisible] = useState(false); 
  const [formPagamento, setFormPagamento] = useState('boleto'); 
  const [numeroParcelas, setNumeroParcelas] = useState(1);
  const [loading, setLoading] = useState(true);


  const value = {
    produtos,
    setProducts,
    loading,
    setLoading,
    cartItens,
    setCartItens,
    isCartVisible,
    setisCartVisible,
    formPagamento,
    setFormPagamento,
    numeroParcelas,
    setNumeroParcelas,
  
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
};
