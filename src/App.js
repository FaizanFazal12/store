import Home from "./component/Home";
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductItem from "./component/ProductItem";
import Cart from "./component/Cart";


function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
        <Route exact path="/" element={<Product />}/> 
          <Route exact path="/productitem/:id" element={<ProductItem />} />
          <Route exact path="/cart" element={<Cart/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
