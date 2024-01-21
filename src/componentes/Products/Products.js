import React, { useContext } from "react";
import fetchProducts from "../../api/fetchProducts";

import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loading from '../Loader/Loader'
import Context from "../../context/AppContext";

function Products() {
  
  const {produtos, setProducts,loading,setLoading } = useContext(Context);
  
 
  useEffect(() => {
     setTimeout(()=>{
      fetchProducts("notebook").then((response) => {
        setProducts(response);
        setLoading(false)
      });
      }, 2000)
  }, []);
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl flex justify-center mt-4 uppercase text-transparente">Products</h1>
      <section className="flex flex-wrap gap-3 py-10">
        {loading ? (
          <Loading />
        ) : (
          produtos.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        )}
      </section>
    </div>
  );
}

export default Products;
