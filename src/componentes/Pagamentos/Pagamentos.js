import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { PiNewspaperThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { SiPix } from "react-icons/si";
import { useState } from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import Cost from "../../util/cost";


function Pagamentos() {
  const {
    cartItens,
    isCartVisible,
    formPagamento,
    setFormPagamento,
    numeroParcelas,
    setNumeroParcelas,
  } = useContext(AppContext);
  

  //function to change the number of installments
  const handleChangeParcelas = (e) => {
    setNumeroParcelas(parseInt(e.target.value));
  };

  const location = useLocation();
  const { id } = queryString.parse(location.search);
  

  //function to calculate the total value of the purchase
  const calcularSoma = () => {
    let soma = 0;
    cartItens.forEach((item) => {
      soma += parseFloat(item.price) || 0;
    });
    soma = parseFloat(soma.toFixed(2));
    return soma;
  };

 //function to check the cep and fill the address
  function checkcep(){
    //pega o cep, passa na url o cep e pega os dados da api
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    //se o cep não for preenchido, não faz nada
    if(!cep){
      return;
    }
    //se tiver cep, faz a requisição na api e pega os dados
    fetch(url)
    .then(res => res.json())
    .then(data => {
      //seta nos inputs o valor que vem da api
      document.getElementById("city").value = data.localidade;
      document.getElementById("region").value = data.uf;
      document.getElementById("street-address").value = data.logradouro;
    })
  }
    return (
      <form className="max-w-5xl flex justify-center flex-col mx-auto ml-80 h-screen">
        <div>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Informações do Pedido
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Preencha suas informações abaixo para continuar com o pagamento.
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Primeiro Nome
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sobrenome
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      required
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autocomplete="email"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>
                <div className="mt-2 w-80">
                  <label>Cep</label>
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    required
                    autocomplete="cep"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    onBlur={checkcep}
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Endereço
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      required
                      id="street-address"
                      autocomplete="street-address"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2 sm:col-start-1">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cidade
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="region"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Estado
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      required
                      autocomplete="address-level1"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telefone
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      required
                      autocomplete="postal-code"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pl-4"
            >
              Comprar
            </button>
          </div>
        </div>
        <div className="space-y-12">
          <p>Formas de pagamentos</p>
          <div className="flex justify-center gap-x-6">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                name="pagamento"
                id="boleto"
                checked={formPagamento === "boleto"}
                onChange={() => setFormPagamento("boleto")}
              />
              <PiNewspaperThin className="text-4xl text-indigo-600 mt-2" />
              <p className="text-sm text-gray-900">Boleto</p>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                name="pagamento"
                id="cartao"
                checked={formPagamento === "cartao"}
                onChange={() => setFormPagamento("cartao")}
              />
              <CiCreditCard1 className="text-4xl text-indigo-600 mt-2" />
              <p className="text-sm text-gray-900">Cartão de Crédito</p>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="radio"
                name="pagamento"
                id="pix"
                checked={formPagamento === "pix"}
                onChange={() => setFormPagamento("pix")}
              />
              <SiPix className="text-4xl text-indigo-600 mt-2" />
              <p className="text-sm text-gray-900">Pix</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            
            {formPagamento === "cartao" && (
              <div className="flex mx-auto flex-col mb-24">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Nome do Titular
                </p>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autocomplete="name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                />{" "}
                <div className="mt-2 w-80">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Numero do Cartão
                  </label>
                  <input
                    type="number"
                    name="numero_cartao"
                    id="numero_cartao"
                    autocomplete="numero_cartao"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                  />
                </div>
                <p className="text-sm font-medium leading-6 text-gray-900">
                  Data de expriração
                </p>
                <div className="mt-2 w-80 flex ">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Mês
                    </label>
                    <input
                      type="mes"
                      name="mes"
                      id="mes"
                      placeholder="MM"
                      maxLength="2"
                      pattern="\d{2}"
                      autocomplete="mes"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Ano
                    </label>
                    <input
                      type="ano"
                      name="ano"
                      id="ano"
                      placeholder="AAAA"
                      maxLength="4"
                      pattern="\d{2}"
                      autocomplete="ano"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                    />
                  </div>
                </div>
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Código de segurança
                </p>
                <input
                  type="number"
                  name="numero_cartao"
                  id="numero_cartao"
                  placeholder="AAAA"
                  maxLength="2"
                  pattern="\d{2}"
                  autocomplete="numero_cartao"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                />
              </div>
            )}
            {formPagamento === "boleto" && (
              <div className="flex flex-col mx-auto gap-3 border bg-white p-3 mb-6">
                <p className="text-md font-medium leading-6 text-gray-900">
                  Escolha o número de parcelas
                </p>
                <select
                  className="px-2 p-2 border mt-2 w-80"
                  id="parcelas"
                  name="parcelas"
                  value={numeroParcelas}
                  onChange={handleChangeParcelas}
                >
                  {[...Array(12)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1} parcela{index !== 0 && "s"}
                    </option>
                  ))}
                </select>
                <p className="flex gap-2">
                  Total:
                  <span className="text-md font-medium">
                    {Cost(calcularSoma(), "BRL")}
                  </span>
                </p>
                {numeroParcelas > 0 && (
                  <div>
                    <p className="text-sm font-medium leading-6 text-gray-900">
                      Valor por parcela
                    </p>
                    {Cost(calcularSoma() / numeroParcelas, "BRL")}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    );
}
export default Pagamentos;
