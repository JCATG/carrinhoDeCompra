import React from "react";
import {FaSearch} from "react-icons/fa"
import fetchProducts from "../../api/fetchProducts";
import { useState,useContext } from "react";
import AppContext from "../../context/AppContext";

function Search(){
    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue,setSearchValue] = useState('')
    
    const handleSearch = async (event) => {
        event.preventDefault()
        setLoading(true);//loading começa como true
        const products = await fetchProducts(searchValue);
        setProducts(products);//carrega os produtos
        setLoading(false);// setloading para false
        setSearchValue("");
      }
    return (
      <div className="flex justify-end px-6">
        <form className="flex items-center" onSubmit={handleSearch}>
          <input
            type="search"
            value={searchValue}//react controla o valor do imput
            placeholder="Buscar produtos"
            required
            className="p-2 m-4"
            onChange={(event) => //pega o que o usuario esta digitando
            setSearchValue(event.target.value)
            }
          />
          <button type="submit">
            <FaSearch className="text-3xl" />
          </button>
        </form>
      </div>
    );
}

export default Search;