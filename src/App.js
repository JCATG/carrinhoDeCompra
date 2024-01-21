import Cart from "./componentes/Cart/Cart";
import Header from "./componentes/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./componentes/Products/Products";
import Provider from "./context/provider";
import Pagamentos from "./componentes/Pagamentos/Pagamentos";
import FinalizaCompra from "./componentes/FinalizaCompra/FinalizaCompra";
function App() {
  return (
    <div className="App bg-mygray">
      <Router>
        <Provider>
          <Header />
          <Routes>
            <Route path="/pagamentos" element={<Pagamentos />} />
            <Route path="/finaliza_compra" element={<FinalizaCompra />} />
            <Route path="/" element={<Products />} />
          </Routes>
          <Cart />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
