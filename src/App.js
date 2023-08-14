import Navbar from "./component/Navbar";
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductItem from "./component/ProductItem";
import Cart from "./component/Cart";
import Banner from "./component/Banner";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Banner/>}/> 
        <Route exact path="/product" element={<Product />}/> 
          <Route exact path="/productitem/:id" element={<ProductItem />} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
