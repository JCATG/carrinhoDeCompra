// CobrancaComponent.js

import React, { useEffect } from "react";
import axios from "axios";

const CobrancaComponent = () => {
  useEffect(() => {
    const criarCobranca = async () => {
      const chaveApi =
        "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzIzODY6OiRhYWNoX2NlYWNiNjQ0LTIwZTctNDM4Mi1iNjljLTRhOTNjZWY5ODFjYg==";
      const chaveSecreta = "sua-chave-secreta";

      const dadosCobranca = {
        customer: "id-do-cliente-no-asaas",
        billingType: "BOLETO", // ou 'CREDIT_CARD'
        value: 100.0,
        description: "Descrição da cobrança",
        externalReference: "identificador-unico-do-seu-sistema",
      };

      try {
        const response = await axios.post(
          "https://www.asaas.com/api/v3/payments",
          dadosCobranca,
          {
            headers: {
              "Content-Type": "application/json",
              access_token: chaveApi,
              secret: chaveSecreta,
            },
          }
        );

        console.log("Cobrança criada:", response.data);
      } catch (error) {
        console.error("Erro ao criar cobrança:", error.response.data);
      }
    };

    // Chame a função de criação de cobrança quando o componente for montado
    criarCobranca();
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez ao montar o componente

  return <div>{/* Seu conteúdo React aqui */}</div>;
};

export default CobrancaComponent;
