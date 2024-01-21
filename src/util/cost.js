const Cost = (value,currency) => {
     return value.toLocaleString("pt-br", {style: "currency",currency: currency});
}
export default Cost


// Essa função basicamente recebe um objeto com o valor e a moeda e retorna o valor formatado.